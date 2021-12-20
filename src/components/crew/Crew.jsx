import React from 'react';
import './crew.css';

import {douglasDetails} from './exportDetails';

function Crew() {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "destination", "technology");
    document.body.classList.add("crew");

    const crewDetails = [douglasDetails]

    return (
        <div>
            <div className='crew-header'><strong>02</strong> MEET YOUR CREW</div>

            <div className='crew__body--flex'>
                <div className='crew__img--container'>
                    <img src={crewDetails[0].img} alt='crew-img'/>
                    <hr className='crew__hr'></hr>
                </div>

                <div className='crew__button-container'>
                    <button className='crew__button'></button>
                    <button className='crew__button'></button>
                    <button className='crew__button'></button>
                    <button className='crew__button'></button>
                </div>

                <div className='crew__details'>
                    <div className='crew__position'>{crewDetails[0].position}</div>
                    <div className='crew__name'>{crewDetails[0].name}</div>
                    <p className='crew__description'>{crewDetails[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Crew;
