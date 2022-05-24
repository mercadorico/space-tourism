import React from 'react';
import './technology.css';
import { motion } from 'framer-motion/dist/framer-motion';


import {vehicleDetails, capsuleDetails, portDetails} from './exportDetails';

function Technology(props) {
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
                    <img className='landscape' src={technologyDetails[props.selectIndex].img_landscape} alt='crew-img'/>
                    <img className='portrait' src={technologyDetails[props.selectIndex].img_portrait} alt='crew-img'/>
                </div>
                
                <div className='button__flex-container'>
                        <button className='technology__button' onClick={() => {props.handleClick(0)}}>{props.selectIndex === 0 ? selectedButton(props.selectIndex, 0) : 1}</button>
                        <button className='technology__button' onClick={() => {props.handleClick(1)}}>{props.selectIndex === 1 ? selectedButton(props.selectIndex, 1) : 2}</button>
                        <button className='technology__button' onClick={() => {props.handleClick(2)}}>{props.selectIndex === 2 ? selectedButton(props.selectIndex, 2) : 3}</button>
                </div>

                <div className='details__flex-container'>
                    <div className='terminology'>THE TERMINOLOGY...</div>

                    <div className='technology__name'>{technologyDetails[props.selectIndex].name}</div>

                    <p className='description'>{technologyDetails[props.selectIndex].description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Technology;
