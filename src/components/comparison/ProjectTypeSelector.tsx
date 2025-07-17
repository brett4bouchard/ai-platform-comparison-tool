'use client'

import { useState } from 'react'
import { PROJECT_TYPES, ProjectType } from '@/types'

interface ProjectTypeSelectorProps {
  value?: ProjectType
  onChange?: (value: ProjectType) => void
  className?: string
}

export function ProjectTypeSelector({ value, onChange, className }: ProjectTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<ProjectType>(value || PROJECT_TYPES[0])
  const [showCustomInput, setShowCustomInput] = useState(value === 'Custom/Other')

  const handleChange = (newValue: ProjectType) => {
    setSelectedType(newValue)
    setShowCustomInput(newValue === 'Custom/Other')
    onChange?.(newValue)
  }

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        What type of project are you building?
      </label>
      <select
        value={selectedType}
        onChange={(e) => handleChange(e.target.value as ProjectType)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {PROJECT_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      
      {showCustomInput && (
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Please describe your project:
          </label>
          <textarea
            placeholder="Describe your specific use case..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
    </div>
  )
}