import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        タスクはまだありません。上のフォームから追加してください。
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}
