import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";
import { render } from "@testing-library/react";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Сделай приложение"),
      this.createTodoItem("Адабстар задачи от 13.05"),
      this.createTodoItem("Бег каждый день"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log("Toggle important", id);
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      // 1. update object
      const oldItem = todoData[index];
      const newItem = { ...oldItem, done: !oldItem.done }; // создали копию oldItem и перезаписали свойство done на противоположное

      // 2. construct new array
      const newArray = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
