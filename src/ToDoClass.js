import React, { Component } from "react";

class TodosComponent extends Component {
  constructor() {
    super();

    this.state = {
      currentTodo: "",
      todos: [
        {
          todo: "bake a cake",
          isCompleted: true
        },
        {
          todo: "go for a walk",
          isCompleted: false
        },
        {
          todo: "contribute a web development tutorial on Enlight",
          isCompleted: false
        }
      ]
    };
  }

  createNewTodo(currentTodo) {
    let todosArray = [...this.state.todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    this.setState({todos: todosArray});
  }

  completeTodo(index) {
    let todosArray = [...this.state.todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    this.setState({todos: todosArray});
  }

  deleteTodo(index) {
    let todosArray = [...this.state.todos];
    todosArray.splice(index, 1);
    this.setState({todos: todosArray});
  }

  render() {
    return (
      <div>
        <input
          className="todo-input"
          value={this.state.currentTodo}
          onChange={e => {
            this.setState({ currentTodo: e.target.value });
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.createNewTodo(this.state.currentTodo);
              this.setState({ currentTodo: "" });
            }
          }}
          placeholder="What needs to get done?"
        />
        {this.state.todos.map((todo, index) => (
          <div key={todo} className="todo">
            <div className="checkbox" onClick={() => this.completeTodo(index)}>
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <div className={todo.isCompleted ? "done" : ""}>
              {todo.todo}
            </div>
            <div className="delete" onClick={() => this.deleteTodo(index)}>
              &#128465;
            </div>
          </div>
        ))}
        {this.state.todos.length > 0 && `${this.state.todos.length} items`}
      </div>
    );
  }
}
export default TodosComponent;
