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
      this.setState({clickCheck:[], score:0, goal:12, topScore, message: "You already clicked that!  Gameover!  Click to try again!" });
      return;
    }
    
    else{
      clickCheck.push(id);

      if(clickCheck.length === 12){
        this.setState({clickCheck:[], score:12, message: "Great Memory!  You win!"})
        return;
      }





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
