import React, { Component } from 'react';
import './App.css';
import AddTodo from "../components/Add"
import AllTodos from "../components/AllTodos"
class App extends Component {
  // #######LIFECYCLE WHEN CREATING A COMPONENT(only works with stateful components)
  // constructor -> componentWillMount -> render -> componentDidMount
  //  the componentWillUnmount works when the component is about to be deleted

  constructor(props) {
    console.log("[App.js] inside the constructor")
    super(props) //This will add the props to the parent class(Component)
    this.state = {
      todos: [
        { id: 11234, title: "Eat" },
        { id: 234234, title: "Sleep" },
        { id: 334234, title: "Code" },
        { id: 4234234, title: "Repeat" }
      ]
    }
  }
  componentWillMount() {
    console.log("[App.js] inside the componentWillMount()")
    // this method is depracated.
  }
  componentDidMount() {
    console.log("[App.js] inside the componentDidMount()")
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
    console.log("[App.js] inside the render")
    return (
      <div className="App">
        <AddTodo addTodo = {(event) =>this.addTodoHandler(event)}/>
        <AllTodos todos = {this.state.todos} deleteTodoHandler={this.deleteTodoHandler}/>
      </div>
    );
  }
}

export default App;
