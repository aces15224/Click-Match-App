import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import matches from "./match.json";

class App extends Component() {

  state = {
    matches,
    idArray:[],
    score:0,
    topScore:0,
    goal:12,
    message:""
  }

  answerShift = id =>{
    const clickCheck = this.state.idArray;

    if (clickCheck.includes(id)){
      this.setState({  });
    }
    else{
      clickCheck.push(id);
    }
  }
 

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
// random order
// https://www.w3schools.com/js/js_array_sort.asp

export default App;
