import React from "react";
import "./card.css"

const Card = props =>(
        <div className="card img-container hover">
            <img alt={props.alt} src={props.image} id={props.id} onClick={() => props.answerShift(props.id)} className="cardImage"/>
        </div>
)
                                                                  
export default Card;