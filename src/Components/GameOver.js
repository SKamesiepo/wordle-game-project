import React, { useContext } from "react";
import { AppContext } from "../App"

function GameOver() {
    const { gameOver, currAttempt, correctWord } = useContext(AppContext)
  return (
    <div className="mt-10 font-sans text-2xl">
      <p>{gameOver.guessedWord ? "You correctly guessed the word!" : "You failed the game!"}</p>
      <p className="mt-4">The correct word was: <span className="bg-green-600 p-2 rounded ">{correctWord}</span></p>
      {gameOver.guessedWord && (<h3 className="mt-4">Attempts Taken: {currAttempt.attempt}</h3>)}
    </div>
  )
}

export default GameOver