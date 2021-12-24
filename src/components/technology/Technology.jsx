import React from 'react';
import './technology.css';

import {vehicleDetails, capsuleDetails, portDetails} from './exportDetails';

function Technology(props) {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "destination");
    document.body.classList.add("technology");

    const technologyDetails = [vehicleDetails, portDetails, capsuleDetails];

    return (
        <div>
            <div className='technology-header'><strong>02</strong> SPACE LAUNCH 101</div>

            <div className='technology__flex-container'>
                <div className='technology__img-container'>
                    <img className='landscape' src={technologyDetails[0].img_landscape} alt='crew-img'/>
                </div>

                <div className='details__flex-container'>
                    <div className='button__flex-container'>
                        <button className='technology__button'>1</button>
                        <button className='technology__button'>2</button>
                        <button className='technology__button'>3</button>
                    </div>

                    <div>THE TERMINOLOGY...</div>

                    <div>{technologyDetails[0].name}</div>

                    <p>{technologyDetails[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Technology;
