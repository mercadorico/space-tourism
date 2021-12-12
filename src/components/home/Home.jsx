import React from 'react';
import './home.css';

function Home() {

    // Remove class and add new one to render correct background image
    document.body.classList.remove("destination", "crew", "technology");
    document.body.classList.add("home");

    return (
        <div>
            <div className="home--flex-container">
                <div className='home__text'>
                    <div className='home__firstSentence'>SO, YOU WANT TO TRAVEL TO</div>
                    <div className='home__space'>SPACE</div>
                    <div className='home__paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                </div>
                <div className='home__explore--flex-container home__explore--flex-item'>
                    <div className='home__explore--flex-container2'>EXPLORE</div>
                </div>
            </div>
        </div>
    )
}

export default Home;
