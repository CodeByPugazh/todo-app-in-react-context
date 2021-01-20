import React from "react"
import PropTypes from "prop-types"

function Item({ todo, onComplete }) {
  return (
    <div
      style={
        todo.done
          ? { ...styles, textDecoration: "line-through" }
          : { ...styles }
      }
      onClick={() => onComplete(todo.id)}
    >
      {todo.text}
    </div>
  )
}

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  onComplete: PropTypes.func,
}

const styles = {
  padding: "10px",
  cursor: "pointer",
  userSelect: "none",
}
export default Item
