import { Platform, UserRequirements, ComparisonResult, BudgetRange } from '@/types'

export function calculatePlatformScore(
  platform: Platform,
  requirements: UserRequirements
): number {
  const criteriaScores = platform.criteriaScores
  let totalScore = 0
  let criteriaCount = 0

  // Calculate match percentage based on user's Yes/No selections
  Object.entries(requirements.criteria).forEach(([criterion, isRequired]) => {
    if (isRequired && criteriaScores[criterion] !== undefined) {
      totalScore += criteriaScores[criterion]
      criteriaCount++
    }
  })

  // Calculate base score (0-100)
  const baseScore = criteriaCount > 0 ? totalScore / criteriaCount : 0

  // Apply project type weighting
  const projectTypeWeight = getProjectTypeWeight(platform, requirements.projectType)
  
  return Math.round(baseScore * projectTypeWeight)
}

function getProjectTypeWeight(platform: Platform, projectType: string): number {
  const categoryTags = platform.categoryTags

  // Define project type to category mappings
  const projectCategoryMappings: Record<string, string[]> = {
    "Customer Support Automation": ["Customer Support", "Automation", "Chatbots"],
    "Content Generation & Marketing": ["Content Generation", "Marketing", "AI Apps"],
    "Data Analysis & Reporting": ["Data Analysis", "Analytics", "Business Intelligence"],
    "Lead Generation & Sales": ["Lead Generation", "Sales", "CRM"],
    "Internal Process Automation": ["Automation", "Workflows", "Business Process"],
    "E-commerce & Shopping": ["E-commerce", "Shopping", "Retail"],
    "Voice & Audio Processing": ["Voice AI", "Audio AI", "Voice Generation"],
    "Document Processing": ["Document Processing", "OCR", "Text Processing"],
    "Custom/Other": ["AI Apps", "Custom AI", "Development"]
  }

  const relevantCategories = projectCategoryMappings[projectType] || []
  
  // Check if platform categories match project type
  const hasMatchingCategory = relevantCategories.some(category =>
    categoryTags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
  )

  return hasMatchingCategory ? 1.1 : 1.0 // 10% boost for matching categories
}

export function applyBudgetFilter(platforms: Platform[], budget: BudgetRange): Platform[] {
  // For now, return all platforms - budget filtering logic can be enhanced
  // when we have more detailed pricing data
  return platforms
}

export function rankPlatforms(
  platforms: Platform[],
  requirements: UserRequirements
): ComparisonResult[] {
  // Apply budget filter
  const filteredPlatforms = applyBudgetFilter(platforms, requirements.budget as BudgetRange)

  // Calculate scores and create comparison results
  const results: ComparisonResult[] = filteredPlatforms.map(platform => {
    const score = calculatePlatformScore(platform, requirements)
    const strengths = getStrengths(platform, requirements)
    const tradeoffs = getTradeoffs(platform, requirements)

    return {
      platform,
      matchScore: score,
      strengths,
      tradeoffs
    }
  })

  // Sort by score (highest first) and return top 5
  return results
    .filter(result => result.matchScore > 0) // Only include platforms with some match
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5)
}

function getStrengths(platform: Platform, requirements: UserRequirements): string[] {
  const strengths: string[] = []
  const criteriaScores = platform.criteriaScores

  Object.entries(requirements.criteria).forEach(([criterion, isRequired]) => {
    if (isRequired && criteriaScores[criterion] >= 75) {
      strengths.push(`Strong ${criterion.toLowerCase()}`)
    }
  })

  // Add category-based strengths
  if (platform.categoryTags.includes("Open Source")) {
    strengths.push("Open source and customizable")
  }
  if (platform.categoryTags.includes("API")) {
    strengths.push("Robust API integration")
  }

  return strengths.slice(0, 3) // Return top 3 strengths
}

function getTradeoffs(platform: Platform, requirements: UserRequirements): string[] {
  const tradeoffs: string[] = []
  const criteriaScores = platform.criteriaScores

  Object.entries(requirements.criteria).forEach(([criterion, isRequired]) => {
    if (isRequired && criteriaScores[criterion] < 50) {
      tradeoffs.push(`Limited ${criterion.toLowerCase()}`)
    }
  })

  // Add common tradeoffs based on platform characteristics
  if (platform.categoryTags.includes("Open Source")) {
    tradeoffs.push("Requires more technical setup")
  }
  if (platform.pricingModel === "Enterprise Pricing") {
    tradeoffs.push("Higher cost for advanced features")
  }

  return tradeoffs.slice(0, 2) // Return top 2 tradeoffs
}