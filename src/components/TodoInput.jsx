import React, { useState, useContext } from "react"
import { TodoContext } from "../Todo.Context"
import uuid from "react-uuid"

const TodoInput = () => {
  const [todos, setTodos] = useContext(TodoContext)
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const update = [...todos, { id: uuid(), text: input, done: false }]
    setTodos(update)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Add todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-link">
            ADD
          </button>
        </div>
      </div>
    </form>
  )
}

export default TodoInput
