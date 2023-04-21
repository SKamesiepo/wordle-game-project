import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import GameOver from './Components/GameOver';
import { createContext, useState, useEffect } from 'react'
import { boardDefault, generateWordSet } from './Words'; //generateWordSet function  is imported here because the app.js is the first thing that is generated

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState  ({attempt: 0, letterPos: 0});
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false})
  const [correctWord, setCorrectWord] = useState("")


  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
      console.log(words.todaysWord) //Testing
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard)
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }
  
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Fount"); //Checks for if word is in wordbank
    }

    if (currWord.toLowerCase() === correctWord) {
      setGameOver({gameOver: true, guessedWord: true})
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false })
    }

    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});

  }

  return (
    <div className="text-center text-white bg-black w-screen h-screen">
      <nav className="h-24 w-full m-0 border-b border-gray-400 grid place-items-center">
        <h1 className="m-0 p-2 rounded-md font-sans text-4xl text-white  bg-gradient-to-r from-yellow-300 to-green-500">Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, correctWord, setDisabledLetters, disabledLetters, setGameOver, gameOver} }>
        <div className="w-full h-fit pt-10 flex flex-col items-center pt-50"> 
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
        
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
