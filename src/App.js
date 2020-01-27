import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import matches from "./matches.json";
import Wrapper from "./components/wrapper";
import Card from "./components/card";


class App extends Component {

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
      this.setState({clickCheck:[], score:0, goal:12, message: "You already clicked that!  Gameover!  Click to try again!" });
      //setState TOPSCORE
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
 
  render() {
  return (

    <Wrapper>
       {this.state.matches.map(match => (
      <Card
        id={match.id}
        key={match.id}
        image={match.image}
        alt={match.alt}
      />
       ))}
    </Wrapper>
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
}}
// random order
// https://www.w3schools.com/js/js_array_sort.asp

export default App;
