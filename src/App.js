import React, { Component } from 'react';
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
    goal:12,
    message:"Yeah!"
  }

  answerShift = id =>{
    const clickCheck = this.state.idArray;
console.log(this.state.score)
      console.log(clickCheck.length)
    if (clickCheck.includes(id)){
      this.setState({clickCheck:[], score:0, message: "You already clicked that!  Gameover!  Click to try again!" });
      //setState TOPSCORE
      return;
    }
    
    else{
      clickCheck.push(id);
      matches.sort(function(a, b){return 0.5 - Math.random()});
      // this.setState({score: this.state.score +1});


      if(this.state.score === 11){
        this.setState({clickCheck:[], score:12, message: "Great Memory!  You win!"})
        return;
      }

      


      this.setState({ score: this.state.score +1, message: "" });
    }
  }
 
  render() {
  return (

    <Wrapper>
      <Title
      score={this.state.score}
      message={this.state.message}
      />
      <div className="container">
        <div className="row">
          {this.state.matches.map(match => (
            <Card
              id={match.id}
              key={match.id}
              image={match.image}
              alt={match.alt}
              answerShift={this.answerShift}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}}


export default App;
