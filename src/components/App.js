import React from "react";
// component import\
import MyNavBar from "./MyNavBar";
import MainContent from "./MainContent";
import MyFooter from "./MyFooter";

// inline js
var date = new Date();
let greeting;

const styles = {
  fontSize: 32, // giving inline style
  backgroundColor: "#AFFF33"
}
if (date.getHours() < 12) {
  greeting = "morning!"
  styles.color = "#005AEE"
} else if (date.getHours() < 20) {
  greeting = "evening!"
  styles.color = "#EE4500"
} else {
  greeting = "night!"
  styles.color = "#8200EE"
}

function App() {
  return (
    <div>
      <MyNavBar />
      <MainContent />
      <MyFooter />
      <p style={styles}>Here is my greeting: {"Good" + " " + greeting}</p>{" "}
      {/* This is inline JS*/}
    </div>
  );
}

export default App;
