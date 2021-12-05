import React from 'react';
import './crew.css';

function Crew() {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "destination", "technology");
    document.body.classList.add("crew");

    return (
        <div>
            Crew
        </div>
    )
}

export default Crew;
