'use client'

import { useState } from 'react'
import { ComparisonForm } from '@/components/comparison/ComparisonForm'
import { ResultsDisplay } from '@/components/comparison/ResultsDisplay'
import { UserRequirements, ComparisonResult } from '@/types'

export default function ComparisonPage() {
  const [results, setResults] = useState<ComparisonResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (requirements: UserRequirements) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/search/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requirements),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations')
      }

      const data = await response.json()
      setResults(data.results)
      setShowResults(true)
    } catch (error) {
      console.error('Error fetching recommendations:', error)
      // Handle error (could show toast notification)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefine = () => {
    setShowResults(false)
    setResults([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {!showResults ? (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your Perfect AI Platform
              </h1>
              <p className="text-lg text-gray-600">
                Answer a few questions to get personalized recommendations for your project
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ComparisonForm onSubmit={handleSubmit} />
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <ResultsDisplay 
              results={results} 
              onRefine={handleRefine}
            />
          </div>
        )}
        
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Finding Your Platforms
                </h3>
                <p className="text-gray-600">
                  Analyzing platforms based on your requirements...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}