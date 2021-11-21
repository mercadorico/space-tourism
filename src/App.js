import React from 'react'

import { Crew, Destination, Home, Navbar, Technology} from './components/exportHelper';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Crew />
            <Destination />
            <Technology />
        </div>
    )
}

export default App;
