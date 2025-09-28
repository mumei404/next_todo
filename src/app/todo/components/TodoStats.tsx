interface Props {
  completed: number
  total: number
}

export default function TodoStats({ completed, total }: Props) {
  if (total === 0) return null
  return (
    <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center">
      {total} 件中 {completed} 件完了
    </div>
  )
}
