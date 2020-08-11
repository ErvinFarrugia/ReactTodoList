import React from 'react'

function TodoItem (props) {
    return(
        <div className="todoItem">
            <input 
            type="checkbox"
            checked={props.item.completed} 
            onChange={(event) => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem