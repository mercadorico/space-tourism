import React from 'react';
import './destination.css';

function Destination() {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "technology");
    document.body.classList.add("destination");

    return (
        <div>
            Destination
        </div>
    )
}

export default Destination;
