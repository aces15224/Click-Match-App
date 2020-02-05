import React, { Component } from 'react';
import './App.css';
import matches from "./matches.json";
import Wrapper from "./components/wrapper";
import Card from "./components/card";
import Title from "./components/title";
import filler from "./brainFiller.png"

class App extends Component {
  
  
  // state information

  constructor(props){
    super(props);
    this.state = {
      matches,
      idArray:[],
      score:0,
      topScore:0,
      message:"Test your memory!  Click on each image, but don't click on any more than once!",
      loading:false
      }
  }
    
    // onclick function

  answerShift = id =>{
    var topScore = this.state.topScore;
    const score = this.state.score;
    const clickCheck = this.state.idArray;
    this.setState({loading:true})
          matches.sort(function(a, b){return 0.5 - Math.random()});


    // image segue controls 

    setTimeout(function(){
      this.setState({loading:false})
      }.bind(this), 500)

    // image sorting and scoring logic

    if (clickCheck.includes(id)){ 
      // matches.sort(function(a, b){return 0.5 - Math.random()});
     
      if(score > topScore){
        this.setState({topScore:score})
      }
        this.setState({idArray:[], message: "You already clicked that!  Game over! Try Again!" })
        this.setState({score:0,})           
    }
    
    else {
      clickCheck.push(id);
           
      if(score === 11){
        this.setState({clickCheck:[], score: 12, topScore: score, message: "Great Memory!  You win!"})
        return;
      }
      if(score < topScore){
        this.setState({score: score+1,  message: ""})
        return;
      }     
      this.setState({ score: score +1, topScore: score +1, message: "" });     
    }
  }
 
  render() {
  return (

    <Wrapper>
      <Title
      score={this.state.score}
      topScore={this.state.topScore}
      message={this.state.message}
      />
      <div className="container">
          {this.state.loading === true ? 
            this.state.matches.map(match => (
            <Card
              id={match.id}
              key={match.id}
              image={filler}
              alt={match.alt}
              answerShift={this.answerShift}
            />
          ))
          :
          this.state.matches.map(match => (
            <Card
              id={match.id}
              key={match.id}
              image={match.image}
              alt={match.alt}
              answerShift={this.answerShift}
            />
          ))
        }
        
      </div>
    </Wrapper>
  );
}}


export default App;
