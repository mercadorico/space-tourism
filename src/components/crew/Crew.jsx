import React from 'react';
import './crew.css';
import { motion } from 'framer-motion/dist/framer-motion';

import {douglasDetails, markDetails, victorDetails, anoushehDetails} from './exportDetails';

function Crew({selectIndex, handleClick}) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "destination", "technology");
    document.body.classList.add("crew");

    const crewDetails = [douglasDetails, markDetails, victorDetails, anoushehDetails]

    //return div on button base on selectIndex state
    const selectedButton = (selectIndex, buttonNumber) => {
        if(selectIndex === buttonNumber) {
            return <div className='crew__button-div--fill'></div>
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className='crew-header'><strong>02</strong> MEET YOUR CREW</div>

            <div className='crew__body--flex'>
                <div className='crew__img--container'>
                    <img src={crewDetails[selectIndex].img} alt='crew-img'/>
                    <hr className='crew__hr'></hr>
                </div>

                <div className='crew__details'>

                    <div className='crew__button-container'>
                        <button className='crew__button' onClick={() => {handleClick(0)}} > {selectedButton(selectIndex, 0)} </button>
                        <button className='crew__button' onClick={() => {handleClick(1)}} > {selectedButton(selectIndex, 1)} </button>
                        <button className='crew__button' onClick={() => {handleClick(2)}} > {selectedButton(selectIndex, 2)} </button>
                        <button className='crew__button' onClick={() => {handleClick(3)}} > {selectedButton(selectIndex, 3)} </button>
                    </div>

                    <div className='crew__position'>{crewDetails[selectIndex].position}</div>
                    <div className='crew__name'>{crewDetails[selectIndex].name}</div>
                    <p className='crew__description'>{crewDetails[selectIndex].description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Crew;
