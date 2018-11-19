import React, { Component } from 'react';
import './App.css';
import DisplayTodo from "./Display.js"
import AddTodo from "./Add"

class App extends Component {
  state = {
    todos: [
      {id: 1,title: "Eat"},
      {id: 2,title: "Sleep"},
      {id: 3,title: "Code"},
      {id: 4,title: "Repeat"}
    ]
  }
  addTodoHandler = (event) => {
      event.preventDefault()
      let value = event.target.elements.todo.value;
      let newTodo = {id: Math.random()*11111, title: value}
      let todos = [...this.state.todos]
      todos.push(newTodo)
      this.setState({
        todos: todos
      })
      event.target.elements.todo.value = ""
  }
  render() {
    let all_todos = this.state.todos.map(todo => {
      return <DisplayTodo title = {todo.title} key={todo.id} />
    })
    return (
      <div className="App">
        <AddTodo addTodo = {(event) =>this.addTodoHandler(event)}/>
        {all_todos}
      </div>
    );
  }
}

export default App;
