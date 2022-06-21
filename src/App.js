import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";

import { Crew, Destination, Home, Navbar, Technology} from './components/exportHelper';
import './App.css';

const App = () => {

    // index for each page contents, contents are altered based on the current index
    const [selectIndex, setSelectIndex] = useState(0);
    // navbar state
    const [navState, setNavState] = useState('home-bar');

    const handleClick = (clickedIndex) => {
        setSelectIndex(clickedIndex);
    }

    const resetState = () => {
        setSelectIndex(0);
    }

    return (
        <div className="App">
            <Navbar resetState={resetState} navState={navState} setNavState={setNavState} />
            <Routes>
                <Route path="/" element={<Home setNavState={setNavState} />} />
                <Route path="destination" element={<Destination selectIndex={selectIndex} handleClick={handleClick} />} />
                <Route path="crew" element={<Crew selectIndex={selectIndex} handleClick={handleClick} />} />
                <Route path="technology" element={<Technology selectIndex={selectIndex} handleClick={handleClick}  />} />
            </Routes>
        </div>
    )
}

export default App;
