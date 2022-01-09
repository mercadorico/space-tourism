import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";

import { Crew, Destination, Home, Navbar, Technology} from './components/exportHelper';
import './App.css';

const App = () => {

    const [selectIndex, setSelectIndex] = useState(0);

    const handleClick = (clickedIndex) => {
        setSelectIndex(clickedIndex);
    }

    const resetState = () => {
        setSelectIndex(0);
    }

    return (
        <div className="App">
            <Navbar resetState={resetState} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="destination" element={<Destination selectIndex={selectIndex} handleClick={handleClick} />} />
                <Route path="crew" element={<Crew selectIndex={selectIndex} handleClick={handleClick} />} />
                <Route path="technology" element={<Technology selectIndex={selectIndex} handleClick={handleClick}  />} />
            </Routes>
        </div>
    )
}

export default App;
