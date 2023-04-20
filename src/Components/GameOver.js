import React, { useContext } from "react";
import { AppContext } from "../App"

function GameOver() {
    const { gameOver, currAttempt, setGameOver, correctWord } = useContext(AppContext)
  return (
    <div className="gameOver">
      <h1>{gameOver.guessedWord ? "You correctly guessed the word!" : "You failed the game!"}</h1>
      <h2>The correct word was: <span>{correctWord}</span></h2>
      {gameOver.guessedWord && (<h3>Attempts Taken: {currAttempt.attempt}</h3>)}
    </div>
  )
}

export default GameOver