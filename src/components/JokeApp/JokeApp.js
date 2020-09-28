import React from "react"
import Joke from "./Joke"

function JokeApp() {
    return(
        <div>
            <Joke 
            content={{question:"Why is 6 afraid of 7?",punchline:"Because 7 8 9"}}
            />
            <Joke 
            content={{question:"Why do pandas like old films?", punchline:"Because they are black and white"}}
            />
            <Joke 
            content={{punchline:"Boo"}}
            />
        </div>
    )
}

export default JokeApp