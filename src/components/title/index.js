import React from "react";
import "./title.css"

    



function Title(props) {

    return  <div id="title" className="col-md-4">
              <div id="titleBox">
                <h1 id="name">Memory Match</h1>
                <h3 className="score">Your Score: {props.score}</h3>
                <h3 className="topScore">Top Score: {props.topScore}</h3>
                <h3 className="message"> {props.message}</h3>
              </div>
            </div>
          }

export default Title;