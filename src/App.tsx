import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tictactoe/tictactoe'
import TicTacToe from './tictactoe/tictactoe';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React TicTacToe
          </p>
          <div>
            <TicTacToe/>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
