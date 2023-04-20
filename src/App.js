import './App.css';
import React, { useState } from 'react'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext } from 'react';
import { boardDefault } from './Words';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard} }>
        <Board />
        <Keyboard />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
