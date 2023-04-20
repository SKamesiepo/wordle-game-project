import './App.css';
import React, { useState } from 'react'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext} from 'react'

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
