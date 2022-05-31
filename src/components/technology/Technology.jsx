import React from 'react';
import './technology.css';
import { motion } from 'framer-motion/dist/framer-motion';


import {vehicleDetails, capsuleDetails, portDetails} from './exportDetails';

function Technology({selectIndex, handleClick}) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "destination");
    document.body.classList.add("technology");

    const technologyDetails = [vehicleDetails, portDetails, capsuleDetails];

    //return div on button base on selectIndex state
    const selectedButton = (selectIndex, buttonNumber) => {
        if(selectIndex === buttonNumber) {
            return <div className='technology__button-div--fill'>{selectIndex + 1}</div>
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className='technology__header'><strong>03</strong> SPACE LAUNCH 101</div>

            <div className='technology__flex-container'>
                <div className='technology__img-container'>
                    <img className='landscape' src={technologyDetails[selectIndex].img_landscape} alt='crew-img'/>
                    <img className='portrait' src={technologyDetails[selectIndex].img_portrait} alt='crew-img'/>
                </div>
                
                <div className='button__flex-container'>
                        <button className='technology__button' onClick={() => {handleClick(0)}}>{selectIndex === 0 ? selectedButton(selectIndex, 0) : 1}</button>
                        <button className='technology__button' onClick={() => {handleClick(1)}}>{selectIndex === 1 ? selectedButton(selectIndex, 1) : 2}</button>
                        <button className='technology__button' onClick={() => {handleClick(2)}}>{selectIndex === 2 ? selectedButton(selectIndex, 2) : 3}</button>
                </div>

                <div className='details__flex-container'>
                    <div className='terminology'>THE TERMINOLOGY...</div>

                    <div className='technology__name'>{technologyDetails[selectIndex].name}</div>

                    <p className='description'>{technologyDetails[selectIndex].description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Technology;
