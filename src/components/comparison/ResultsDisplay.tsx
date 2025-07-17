import { ComparisonResult } from '@/types'
import { PlatformCard } from './PlatformCard'
import { Button } from '@/components/ui/Button'

interface ResultsDisplayProps {
  results: ComparisonResult[]
  onRefine?: () => void
  className?: string
}

export function ResultsDisplay({ results, onRefine, className }: ResultsDisplayProps) {
  if (results.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="max-w-md mx-auto">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.828 0-5.291.987-7.291 2.291A17.952 17.952 0 014 12a18.02 18.02 0 01.688-5.291C6.987 8.987 9.172 10 12 10s5.013-1.013 7.291-2.291z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No platforms found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any platforms that match your criteria. Try adjusting your requirements.
          </p>
          <Button onClick={onRefine}>Refine Search</Button>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Top Platform Recommendations
        </h2>
        <p className="text-lg text-gray-600">
          We found {results.length} platform{results.length !== 1 ? 's' : ''} that match your requirements
        </p>
      </div>

      <div className="space-y-6">
        {results.map((result, index) => (
          <PlatformCard
            key={result.platform.id}
            result={result}
            rank={index + 1}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" onClick={onRefine}>
          Refine Search Criteria
        </Button>
      </div>
    </div>
  )
}