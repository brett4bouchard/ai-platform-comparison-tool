'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ToggleProps {
  label: string
  description?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function Toggle({ label, description, checked = false, onChange, className }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleToggle = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  return (
    <div className={cn('flex items-start space-x-3', className)}>
      <button
        type="button"
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          isChecked ? 'bg-blue-600' : 'bg-gray-200'
        )}
        onClick={handleToggle}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
            isChecked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-900 cursor-pointer" onClick={handleToggle}>
          {label}
        </label>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}