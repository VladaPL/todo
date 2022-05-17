import React, { Component } from "react";

import AppHeader from '../app-header';
import  SearchPanel  from '../search-panel';
import TodoList  from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import "./app.css";
import { render } from "@testing-library/react";

export default class App extends Component {

  state = {
    todoData: [
      { 
        label: "create layout",
        important: false,
        id: 1
      },
      { 
        label: "drink coffee",
        important: true,
        id : 2
      },
      { 
        label: "fix geneus-trees",
        important: false,
        id: 3
      },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ... todoData.slice(0,index),
        ... todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
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
  
        <TodoList todos={this.state.todoData} 
                  onDeleted ={ this.deleteItem } />
      </div>
    );
  };
};
