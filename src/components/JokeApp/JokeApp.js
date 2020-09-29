import React from "react";
import Joke from "./Joke";
import jokeData from "./JokeData";

function JokeApp() {
  const jokeComponents = jokeData.map((joke) => (
    <Joke
      key={joke.id}
      content={{ question: joke.question, punchline: joke.punchline }}
    />
  ));
  return (
    <div>
      {jokeComponents}
      <Joke
        content={{
          question: "Why is 6 afraid of 7?",
          punchline: "Because 7 8 9",
        }}
      />
      <Joke
        content={{
          question: "Why do pandas like old films?",
          punchline: "Because they are black and white",
        }}
      />
      <Joke content={{ punchline: "Boo" }} />
    </div>
  );
}

export default JokeApp;
