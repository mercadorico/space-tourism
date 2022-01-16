import React from 'react';
import './crew.css';

import {douglasDetails, markDetails, victorDetails, anoushehDetails} from './exportDetails';

function Crew(props) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "destination", "technology");
    document.body.classList.add("crew");

    const crewDetails = [douglasDetails, markDetails, victorDetails, anoushehDetails]

    //return div on button base on selectIndex state
    const selectedButton = (selectIndex, buttonNumber) => {
        if(selectIndex === buttonNumber) {
            return <div className='fillDiv'></div>
        }
    }

    return (
        <div>
            <div className='crew-header'><strong>02</strong> MEET YOUR CREW</div>

            <div className='crew__body--flex'>
                <div className='crew__img--container'>
                    <img src={crewDetails[props.selectIndex].img} alt='crew-img'/>
                    <hr className='crew__hr'></hr>
                </div>

                <div className='crew__details'>

                    <div className='crew__button-container'>
                        <button className='crew__button' onClick={() => {props.handleClick(0)}}>{selectedButton(props.selectIndex, 0)}</button>
                        <button className='crew__button' onClick={() => {props.handleClick(1)}}>{selectedButton(props.selectIndex, 1)}</button>
                        <button className='crew__button' onClick={() => {props.handleClick(2)}}>{selectedButton(props.selectIndex, 2)}</button>
                        <button className='crew__button' onClick={() => {props.handleClick(3)}}>{selectedButton(props.selectIndex, 3)}</button>
                    </div>

                    <div className='crew__position'>{crewDetails[props.selectIndex].position}</div>
                    <div className='crew__name'>{crewDetails[props.selectIndex].name}</div>
                    <p className='crew__description'>{crewDetails[props.selectIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Crew;
