import React, { useContext } from "react"
import { TodoContext } from "../Todo.Context"

function Header() {
  const [todos] = useContext(TodoContext)
  return (
    <header className="navbar is-light">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "max(80%, 400px)",
          margin: "0 auto",
          height: "60px",
        }}
      >
        <p className="title is-6" style={{ margin: 0, padding: 0 }}>
          Todo with Context API
        </p>
        <p className="title is-6" style={{ margin: 0, padding: 0 }}>
          Count: {todos.length}
        </p>
      </div>
    </header>
  )
}

export default Header
