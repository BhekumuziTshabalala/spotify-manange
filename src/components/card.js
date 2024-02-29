import { useState } from 'react';
import './card.css'

function Card(props) {


    const style = {
        width: 150, // set the width of the div
        height: 150, // set the height of the div
        borderRadius: "50%", // make the div a circle
        backgroundImage: `url(${props.review.image})`, // set the background image to the image url
        backgroundSize: "cover", // resize the image to cover the div
        backgroundPosition: "center" // center the image in the div
      };

    return (
        <div className="container">
            <h2 id='title'>Whose Month is it anyways!</h2>

            <p id='month' > {props.currentMonth}</p>

            <div style={style} id="image" ></div>

            <h2 id="name" >{props.review.name}  </h2>

            <div id='buttons'>
                <button type='btn' value='<' onClick={ () =>props.change(-1)}> {' < '} </button> 
                <button type='btn' value='>'  onClick={() => props.change(1)}>{' > '} </button>
            </div>
            
        </div>
    )

    
}

export default Card;
