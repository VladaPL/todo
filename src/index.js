import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/app-header";
import  SearchPanel  from "./components/search-panel";
import TodoList  from "./components/todo-list";
import "./index.css";

function App() {
  const todoData = [
    { label: "create layout", important: false, id: 1},
    { label: "drink coffee", important: true, id : 2},
    { label: "fix geneus-trees", important: false, id: 3},
  ];

  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
