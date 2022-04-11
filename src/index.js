import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/app-header";
import  SearchPanel  from "./components/search-panel";
import TodoList  from "./components/todo-list";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
