import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        title: "Do homeworks",
        completed: false,
      },
      {
        id: 1,
        title: "Check ticket's price",
        completed: false,
      },
      {
        id: 2,
        title: "Meet with friends",
        completed: false,
      },
    ],
  };

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify([...this.state.todos]));
  }
  componentDidMount() {
    const result = JSON.parse(localStorage.getItem("todos"));
    if (result) {
      this.setState({ todos: result });
    } else {
      return null;
    }
  }

  addTodo = (title) => {
    const newData = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [newData, ...this.state.todos],
    });
  };
  clearItem = (index) => {
    this.setState({
      todos: [...this.state.todos.filter((some, lua) => lua !== index)],
    });
  };
  checkItem = (id) => {
    this.setState({
      todos: this.state.todos.map((lua) => {
        if (lua.id === id) {
          lua.completed = !lua.completed;
        }
        return lua;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <h2>To Do App</h2>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          items={this.state.todos}
          clearItem={this.clearItem}
          checkItem={this.checkItem}
        />
      </div>
    );
  }
}

export default App;
