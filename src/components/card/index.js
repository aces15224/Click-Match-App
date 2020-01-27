import React from "react";
import "./card.css"

function Card (props){
    return <div className="card img-container hover">
        <img alt={props.alt} src={props.image} id={props.id} onClick={() => props.answerShift(props.id)} />
    </div>
}

//className="TO DO: add class"
export default Card;