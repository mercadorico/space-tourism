import React from 'react';
import './technology.css';

function Technology() {
    // Remove class and add new one to render correct background image
    document.body.classList.remove("home", "crew", "destination");
    document.body.classList.add("technology");

    return (
        <div>
            Technology
        </div>
    )
}

export default Technology;
