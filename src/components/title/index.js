import React from "react";
import "./title.css"

function Title(props) {
    return <div className="row1">
            <div className="col-md-12">
                <h1 id="title">Click Game</h1>
                <h3 className="score">Your Score {props.score}</h3>
                <h3 className="message"> {props.message}</h3>



                {/* <h3 score={props.score}>1</h3> */}
            </div>
        </div>;
  }

export default Title;