import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { Todo } from "../types"
import { v4 } from "uuid"

type TodoStore = {
    todos: Todo[]
    addTodo: (todo: Omit<Todo, "id">) => void
    removeTodo: (todoId: string) => void
    toggleTodo: (todoId: string) => void
}

export const useTodoStore = create<TodoStore>()(persist(set => ({
    todos: [],
    addTodo: todo => set(store => ({
        todos: store.todos.concat({ ...todo, id: v4() })
    })),
    removeTodo: id => set(store => ({
        todos: store.todos.filter(todo => todo.id === id)
    })),
    toggleTodo: id => set(store => ({
        todos: store.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })),
}),
    // middleware to persist to localstorage and retrieve for initial load
    {
        name: "todo-list", storage: createJSONStorage(() => sessionStorage)
    })
)