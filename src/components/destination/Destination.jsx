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
            <div className='destination__flex-container'>
                <div className='destination__heading'><strong>01</strong>SELECT YOUR DESTINATION</div>
                <div className='destination-img'>
                    <img className='destination__img' src={destinationDetails[props.selectIndex].img} alt='destination-img'/>
                </div>
                
                <div className='destination__button-container'>
                    {/* When you need to invoke a function that needs an argument, wrap it inside another function.*/}
                    <button onClick={() => {props.handleClick(0)}}>MOON</button>
                    <button onClick={() => {props.handleClick(1)}}>MARS</button>
                    <button onClick={() => {props.handleClick(2)}}>EUROPA</button>
                    <button onClick={() => {props.handleClick(3)}}>TITAN</button>
                </div>

                <div className='destination__name'>{destinationDetails[props.selectIndex].name}</div>

                <p className='destination_description'>{destinationDetails[props.selectIndex].description}</p>

                <hr className='destination__hr'></hr>

                <div className='destination__avg-distance'>
                    <p>AVG. DISTANCE</p>
                    <div>{destinationDetails[props.selectIndex].distance} KM</div>
                </div>

                <div className='destination__travel-time'>
                    <p>EST. TRAVEL TIME</p>
                    <div>{destinationDetails[props.selectIndex].travelTime}</div>
                </div>
            </div>
        </div>
    )
}

export default Destination;
