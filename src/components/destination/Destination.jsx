import React from 'react';
import './destination.css';

import {moonDetails, marsDetails, europaDetails, titanDetails} from './exportDetails';

function Destination(props) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "technology");
    document.body.classList.add("destination");

    // array to hold destination imgs
    const destinationDetails = [moonDetails, marsDetails, europaDetails, titanDetails];

    return (
        <div>
            <img src={destinationDetails[props.selectIndex].img} alt='destination-img' />
            <h1>{destinationDetails[props.selectIndex].name}</h1>
            <div className='button__container'>
                {/* When you need to invoke a function that needs an argument, wrap it inside another function.*/}
                <button onClick={() => {props.handleClick(0)}}>MOON</button>
                <button onClick={() => {props.handleClick(1)}}>MARS</button>
                <button onClick={() => {props.handleClick(2)}}>EUROPA</button>
                <button onClick={() => {props.handleClick(3)}}>TITAN</button>
            </div>
        </div>
    )
}

export default Destination;
