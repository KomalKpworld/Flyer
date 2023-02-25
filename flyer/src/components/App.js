import React from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Navbar, Flyerpage } from './index.js';
const App = () => {

    return (
        <div>
       
            <Navbar />
         <Routes>
         <Route path='/' element={<Flyerpage/>} />
                    
           
            </Routes>
        </div>
    )
}

export default App

