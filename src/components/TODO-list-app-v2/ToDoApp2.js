import React from "react";
// component imports below
import ToDoItem from "./ToDoItem"
import "./todostyle.css"


function ToDoApp2() {
  return (
    <div className="toDoApp">
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default ToDoApp2;
