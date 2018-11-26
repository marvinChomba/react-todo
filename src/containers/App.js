import React, { Component } from 'react';
import './App.css';
import DisplayTodo from "../components/Display"
import AddTodo from "../components/Add"
import AllTodos from "../components/AllTodos"
class App extends Component {
  state = {
    todos: [
      {id: 11234,title: "Eat"},
      {id: 234234,title: "Sleep"},
      {id: 334234,title: "Code"},
      {id: 4234234,title: "Repeat"}
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
  deleteTodoHandler = (index) => {
    let stateClone = [...this.state.todos]
    stateClone.splice(index,1)
    this.setState({
      todos: stateClone
    })
  }
  
  render() {
    return (
      <div className="App">
        <AddTodo addTodo = {(event) =>this.addTodoHandler(event)}/>
        <AllTodos todos = {this.state.todos} deleteTodoHandler={this.deleteTodoHandler}/>
      </div>
    );
  }
}

export default App;
