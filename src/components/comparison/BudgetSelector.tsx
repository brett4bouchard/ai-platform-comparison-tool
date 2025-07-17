'use client'

import { useState } from 'react'
import { BUDGET_RANGES, BudgetRange } from '@/types'

interface BudgetSelectorProps {
  value?: BudgetRange
  onChange?: (value: BudgetRange) => void
  className?: string
}

export function BudgetSelector({ value, onChange, className }: BudgetSelectorProps) {
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange>(value || BUDGET_RANGES[0])

  const handleChange = (newValue: BudgetRange) => {
    setSelectedBudget(newValue)
    onChange?.(newValue)
  }

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        What's your monthly budget range?
      </label>
      <select
        value={selectedBudget}
        onChange={(e) => handleChange(e.target.value as BudgetRange)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {BUDGET_RANGES.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  )
}