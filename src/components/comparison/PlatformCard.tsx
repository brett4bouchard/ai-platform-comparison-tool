import { ComparisonResult } from '@/types'
import { Button } from '@/components/ui/Button'

interface PlatformCardProps {
  result: ComparisonResult
  rank: number
  className?: string
}

export function PlatformCard({ result, rank, className }: PlatformCardProps) {
  const { platform, matchScore, strengths, tradeoffs } = result

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm">
            #{rank}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
            <p className="text-sm text-gray-600">{platform.description}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(matchScore)}`}>
          {matchScore}% match
        </div>
      </div>

      <div className="space-y-4">
        {strengths.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Strengths</h4>
            <ul className="space-y-1">
              {strengths.map((strength, index) => (
                <li key={index} className="text-sm text-green-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tradeoffs.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Trade-offs</h4>
            <ul className="space-y-1">
              {tradeoffs.map((tradeoff, index) => (
                <li key={index} className="text-sm text-orange-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {tradeoff}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Pricing:</span> {platform.pricingModel}
          </div>
          <div className="space-x-2">
            <a href={platform.pricingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                View Pricing
              </Button>
            </a>
            <a href={platform.websiteUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}