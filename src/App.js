import React from 'react'
import TodoItem from './TodoItem'
import './style.css'
import todoData from './todoData'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const updatedTodoArray = prevState.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed 
                }
                return todo
            })
            return {
                todo: updatedTodoArray
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div className="todoList">
               {todoItems}
            </div>
        )
    }
     
}

export default App