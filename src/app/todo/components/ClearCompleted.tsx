import React from 'react'

interface Props {
  hasCompleted: boolean
  onClear: () => void
}

export default function ClearCompleted({ hasCompleted, onClear }: Props) {
  if (!hasCompleted) return null
  return (
    <div className="mt-6 text-center">
      <button
        onClick={onClear}
        className="text-sm text-gray-500 hover:text-red-500 transition-colors"
      >
        完了済みタスクを削除
      </button>
    </div>
  )
}
