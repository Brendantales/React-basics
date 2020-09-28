import React from "react";
import "./JokeStyle.css";

function Joke(props) {
  return (
    <div>
      {/**Below is a terinary operator which displays when question exists */}
      <p
        className="jokeQStyle"
        style={{ display: props.content.question ? "block" : "none" }}
      >
        {"Question: " + props.content.question}
      </p>
      {/*Below is color which adjusts when question present and not present */}
      <p className="jokePStyle" style={{color: props.content.question ? "black " : "grey"}}>{"Punchline: " + props.content.punchline}</p>
    </div>
  );
}

export default Joke;
