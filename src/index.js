import React from "react";
import ReactDOM from "react-dom";
// importing components
import App from "./components/App";
import ToDoApp from "./components/TODO-list-app/ToDoApp";
import ToDoApp2 from "./components/TODO-list-app-v2/ToDoApp2"
import ContentCard from "./components/ContentCardApp/ContentCard"

ReactDOM.render(
  <div>
    <ContentCard />
    <ToDoApp />
    <App />
    <ToDoApp2 />
  </div>,
  document.getElementById("root")
);
