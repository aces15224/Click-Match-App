import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import matches from "./matches.json";
import Wrapper from "./components/wrapper";
import Card from "./components/card";
import Title from "./components/title";


class App extends Component {

  state = {
    matches,
    idArray:[],
    score:0,
    // topScore:0,
    // goal:12,
    message:"Yeah!"
  }

  answerShift = id =>{
    const clickCheck = this.state.idArray;
    console.log(clickCheck)

    if (clickCheck.includes(id)){
      this.setState({clickCheck:[], score:0, goal:12, message: "You already clicked that!  Gameover!  Click to try again!" });
      //setState TOPSCORE
      return;
    }
    
    else{
      clickCheck.push(id);
      matches.sort(function(a, b){return 0.5 - Math.random()});



      if(clickCheck.length === 12){
        this.setState({clickCheck:[], score:12, message: "Great Memory!  You win!"})
        return;
      }




      this.setState({score: this.state.score +1, goal:12, message: "You already clicked that!  Gameover!  Click to try again!" });


    }
  }
 
  render() {
  return (

    <Wrapper>
      <Title
      score={this.state.score}
      message={this.state.message}
      />
       {this.state.matches.map(match => (
      <Card
        id={match.id}
        key={match.id}
        image={match.image}
        alt={match.alt}
        answerShift={this.answerShift}

      />
       ))}
    </Wrapper>
  );
}}
// random order
// https://www.w3schools.com/js/js_array_sort.asp

export default App;
