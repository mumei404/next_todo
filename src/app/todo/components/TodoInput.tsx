'use client'

import React from 'react'

interface Props {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export default function TodoInput({ value, onChange, onSubmit }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSubmit()
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="新しいタスクを追加..."
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={onSubmit}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        追加
      </button>
    </div>
  )
}
