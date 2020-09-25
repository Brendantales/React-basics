import React from "react";
// component import\
import MyNavBar from "./MyNavBar";
import MainContent from "./MainContent";
import MyFooter from "./MyFooter";

// inline js
var date = new Date();
let greeting;
if (date.getHours() < 12) {
  greeting = "morning!";
} else if (date.getHours() < 20) {
  greeting = "evening!";
} else {
  greeting = "night!";
}

function App() {
  return (
    <div>
      <MyNavBar />
      <MainContent />
      <MyFooter />
      <p>Here is my greeting: {"Good" + " " + greeting}</p>{" "}
      {/* This is inline JS*/}
    </div>
  );
}

export default App;
