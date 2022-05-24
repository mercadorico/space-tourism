import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';

function Home({setNavState}) {

    // Remove class and add new one to render correct background image
    document.body.classList.remove("destination", "crew", "technology");
    document.body.classList.add("home");

    const navigate = useNavigate();

    const handleClick = () => {
        setNavState('destination-bar')
        navigate('/destination');
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="home--flex-container">
                <motion.div className='home__text' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <div className='home__firstSentence'>SO, YOU WANT TO TRAVEL TO</div>
                    <div className='home__space'>SPACE</div>
                    <div className='home__paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                </motion.div>

                <button className='home__explore--flex-container home__explore--flex-item' onClick={handleClick}>
                    <div className='home__explore--flex-container2'>EXPLORE</div>
                </button>
            </div>
        </motion.div>
    )
}

export default Home;
