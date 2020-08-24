import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css'
import Packet from './components/Packet'
import articles from './fixtures'


function App() {
  return (
    <div className="App">
        <Packet id="0" />
        <Packet id="1" />
        <Packet id="2" />
        
    </div>
  );
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  
}

export default App
