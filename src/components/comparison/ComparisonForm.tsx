'use client'

import { useState } from 'react'
import { ProjectTypeSelector } from './ProjectTypeSelector'
import { CriteriaToggles } from './CriteriaToggles'
import { BudgetSelector } from './BudgetSelector'
import { Button } from '@/components/ui/Button'
import { UserRequirements, ProjectType, BudgetRange } from '@/types'

interface ComparisonFormProps {
  onSubmit?: (requirements: UserRequirements) => void
  className?: string
}

export function ComparisonForm({ onSubmit, className }: ComparisonFormProps) {
  const [projectType, setProjectType] = useState<ProjectType>('Customer Support Automation')
  const [criteria, setCriteria] = useState<Record<string, boolean>>({})
  const [budget, setBudget] = useState<BudgetRange>('Under $50/month')
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const requirements: UserRequirements = {
      projectType,
      criteria,
      budget,
      additionalDetails: additionalDetails.trim() || undefined
    }

    try {
      await onSubmit?.(requirements)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-8">
        <ProjectTypeSelector
          value={projectType}
          onChange={setProjectType}
        />

        <CriteriaToggles
          value={criteria}
          onChange={setCriteria}
        />

        <BudgetSelector
          value={budget}
          onChange={setBudget}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Requirements (Optional)
          </label>
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            placeholder="Any specific requirements or preferences not covered above..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? 'Finding Platforms...' : 'Get Recommendations'}
          </Button>
        </div>
      </div>
    </form>
  )
}