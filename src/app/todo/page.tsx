'use client'

import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoStats from './components/TodoStats'
import TodoList from './components/TodoList'
import ClearCompleted from './components/ClearCompleted'
import { Todo } from './types'

// ブラウザ互換性のあるUUID生成関数
function generateUUID(): string {
  // crypto.randomUUID() が利用可能な場合は使用
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  
  // フォールバック: 簡単なUUID v4 生成
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputText, setInputText] = useState('')

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: generateUUID(),
          text: inputText.trim(),
          completed: false,
        },
      ])
      setInputText('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Todo App
        </h1>

        <TodoInput value={inputText} onChange={setInputText} onSubmit={addTodo} />

        <TodoStats completed={completedCount} total={totalCount} />

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <ClearCompleted hasCompleted={completedCount > 0} onClear={clearCompleted} />
      </div>
    </div>
  )
}