import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

class Todos extends Component {
  render() {
    return (
      <div className="table">
        <br></br>
        {this.props.items.map((lua, index) => (
          <div className="eachTodo" key={uuidv4()}>
            <input
              defaultChecked={lua.completed}
              type="checkbox"
              onChange={() => this.props.checkItem(lua.id)}
            />

            <p className={lua.completed ? "dashed" : ""}>{lua.title}</p>

            <button
              onClick={() => this.props.clearItem(index)}
              className="clearBtn"
            >
              <b>X</b>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Todos;
