import React from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Navbar, Flyerpage,FlyerEdit,FlyerDetails, FlyerAdd} from './index.js';
const App = () => {

    return (
        <div>
       
            <Navbar />
         <Routes>
         <Route path='/' element={<Flyerpage/>} />
         <Route path='/flyer/create' element={<FlyerAdd/>} />
         <Route path='/flyer/edit/:flyerId' element={<FlyerEdit/>} />
         <Route path='/flyer/details/:flyerId' element={<FlyerDetails/>} />
    
            </Routes>
        </div>
    )
}

export default App

