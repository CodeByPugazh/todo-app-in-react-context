import React, { useContext } from "react"
import { TodoContext } from "../Todo.Context"
import Item from "./Item"

function ListTodos() {
  const [todos, setTodos] = useContext(TodoContext)
  const handleClick = (id) => {
    const update = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      }
      return item
    })
    setTodos(update)
  }
  return (
    <div>
      <ol style={{ margin: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Item todo={todo} onComplete={handleClick} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ListTodos
