import React from 'react';
import './destination.css';
import { motion } from 'framer-motion/dist/framer-motion';

import {moonDetails, marsDetails, europaDetails, titanDetails} from './exportDetails';

function Destination({selectIndex, handleClick}) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "technology");
    document.body.classList.add("destination");

    // array to hold destination imgs
    const destinationDetails = [moonDetails, marsDetails, europaDetails, titanDetails];

    //return hr on button base on selectIndex state
    const underLine = (selectIndex, buttonNumber) => {
        if(selectIndex === buttonNumber) {
            return <hr className='button--underline'></hr>
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className='destination__flex-container'>
                <div className='destination__header'>
                    <div className='destination__heading'><strong>01</strong>SELECT YOUR DESTINATION</div>
                    <div className='destination-img'>
                        <img className='destination__img' src={destinationDetails[selectIndex].img} alt='destination-img'/>
                    </div>
                </div>
                
                <div className='destination__body'>
                    <div className='destination__button-container'>
                        {/* When you need to invoke a function that needs an argument, wrap it inside another function.*/}
                        <button onClick={() => {handleClick(0)}}>MOON{underLine(selectIndex, 0)}</button>
                        <button onClick={() => {handleClick(1)}}>MARS{underLine(selectIndex, 1)}</button>
                        <button onClick={() => {handleClick(2)}}>EUROPA{underLine(selectIndex, 2)}</button>
                        <button onClick={() => {handleClick(3)}}>TITAN{underLine(selectIndex, 3)}</button>
                    </div>

                    <div className='destination__name'>{destinationDetails[selectIndex].name}</div>
                    <p className='destination_description'>{destinationDetails[selectIndex].description}</p>

                    <hr className='destination__hr'></hr>

                    <div className='destination__lower'>
                        <div className='destination__avg-distance'>
                            <p>AVG. DISTANCE</p>
                            <div>{destinationDetails[selectIndex].distance} KM</div>
                        </div>

                        <div className='destination__travel-time'>
                            <p>EST. TRAVEL TIME</p>
                            <div>{destinationDetails[selectIndex].travelTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Destination;
