'use client'

import { useState } from 'react'

interface Todo {
  id: string
  text: string
  completed: boolean
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputText, setInputText] = useState('')

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: crypto.randomUUID(),
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Todo App
        </h1>
        
        {/* Add Todo Form */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="新しいタスクを追加..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            追加
          </button>
        </div>

        {/* Stats */}
        {totalCount > 0 && (
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            {totalCount} 件中 {completedCount} 件完了
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              タスクはまだありません。上のフォームから追加してください。
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-all duration-200 ${
                  todo.completed
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-800 dark:text-white'
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                >
                  削除
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear completed */}
        {completedCount > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setTodos(todos.filter(todo => !todo.completed))}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              完了済みタスクを削除
            </button>
          </div>
        )}
      </div>
    </div>
  )
}