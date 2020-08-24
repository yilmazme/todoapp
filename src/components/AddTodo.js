import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.title === "") {
      alert("please enter some todos");
    } else {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.title}
          onChange={this.onChange}
          type="text"
          placeholder=" add new todo"
          name="add"
        />
        <input
          style={{ backgroundColor: "green", color: "white" }}
          type="submit"
          value="Add"
        />
      </form>
    );
  }
}

export default AddTodo;
