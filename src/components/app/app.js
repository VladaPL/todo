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
    textOfSearch: '',
    filter: 'all' // active, done, all
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

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    // 1. update object
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // создали копию oldItem и перезаписали свойство done на противоположное

    // 2. construct new array
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (textOfSearch) => {
    this.setState({ textOfSearch });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {

    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  search(items, textOfSearch) {
    if(textOfSearch.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(textOfSearch.toLowerCase()) > -1;
    });
  };

  render() {
    const { todoData, textOfSearch, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, textOfSearch), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter}
                            onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
