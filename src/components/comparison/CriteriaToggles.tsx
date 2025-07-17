'use client'

import { useState } from 'react'
import { Toggle } from '@/components/ui/Toggle'
import { CRITERIA_OPTIONS, CriteriaOption } from '@/types'

interface CriteriaTogglesProps {
  value?: Record<string, boolean>
  onChange?: (criteria: Record<string, boolean>) => void
  className?: string
}

export function CriteriaToggles({ value = {}, onChange, className }: CriteriaTogglesProps) {
  const [criteria, setCriteria] = useState<Record<string, boolean>>(value)

  const handleToggle = (criterion: CriteriaOption, checked: boolean) => {
    const newCriteria = { ...criteria, [criterion]: checked }
    setCriteria(newCriteria)
    onChange?.(newCriteria)
  }

  return (
    <div className={className}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        What features do you need?
      </h3>
      <div className="space-y-4">
        {CRITERIA_OPTIONS.map((criterion) => (
          <Toggle
            key={criterion}
            label={criterion}
            checked={criteria[criterion] || false}
            onChange={(checked) => handleToggle(criterion, checked)}
          />
        ))}
      </div>
    </div>
  )
}