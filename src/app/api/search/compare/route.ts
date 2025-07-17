import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { rankPlatforms } from '@/lib/scoring'
import { UserRequirements, Platform } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const requirements: UserRequirements = await request.json()

    // Validate the request
    if (!requirements.projectType || !requirements.criteria || !requirements.budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Fetch all active platforms from database
    const platformsData = await prisma.platform.findMany({
      where: {
        status: 'active'
      }
    })

    // Convert database records to Platform type
    const platforms: Platform[] = platformsData.map(p => ({
      id: p.id.toString(),
      name: p.name,
      description: p.description || '',
      websiteUrl: p.websiteUrl || '',
      pricingUrl: p.pricingUrl || '',
      pricingModel: p.pricingModel || '',
      categoryTags: p.categoryTags ? JSON.parse(p.categoryTags) : [],
      criteriaScores: p.criteriaScores ? JSON.parse(p.criteriaScores) : {},
      lastUpdated: p.updatedAt,
      status: p.status as 'active' | 'deprecated' | 'pivoted'
    }))

    // Rank platforms based on requirements
    const results = rankPlatforms(platforms, requirements)

    // Log the search for analytics (optional user ID)
    try {
      await prisma.search.create({
        data: {
          projectType: requirements.projectType,
          criteriaSelected: JSON.stringify(requirements.criteria),
          resultsReturned: JSON.stringify(results.map(r => r.platform.id)),
        }
      })
    } catch (error) {
      console.warn('Failed to log search:', error)
    }

    return NextResponse.json({
      results,
      total: results.length,
      query: requirements
    })

  } catch (error) {
    console.error('Comparison API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}