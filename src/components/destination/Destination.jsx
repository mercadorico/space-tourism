import React from 'react';
import './destination.css';

import {Europa, Mars, Moon, Titan} from "../../assets/exportDestination";

function Destination() {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "technology");
    document.body.classList.add("destination");

    return (
        <div>
            <img src={Moon} alt='moon-img' />
        </div>
    )
}

export default Destination;
