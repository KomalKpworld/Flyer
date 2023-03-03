import React from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Navbar, Flyerpage,FlyerEdit,FlyerDetails, FlyerAdd, FlyerSubpage, SubFlyerAdd,SubFlyerEdit, SubFlyerDetails ,UploadFIles, GetUploadFIle, FileDetails} from './index.js';

const App = () => {

    return (
        <div>
            <Navbar />
         <Routes>
         <Route path='/' element={<Flyerpage/>} />
         <Route path='/flyer/create' element={<FlyerAdd/>} />
         <Route path='/flyer/edit/:flyerId' element={<FlyerEdit/>} />
         <Route path='/flyer/details/:flyerId' element={<FlyerDetails/>} />
         <Route path='/sub-flyer' element={<FlyerSubpage/>} />
         <Route path='/sub-flyer/create' element={<SubFlyerAdd/>} />
         <Route path='/sub-flyer/edit/:subflyerId' element={<SubFlyerEdit/>} />
         <Route path='/sub-flyer/details/:subflyerId' element={<SubFlyerDetails/>} />
         <Route path='/upload-files' element={<UploadFIles/>} />
         <Route path='/get-files' element={<GetUploadFIle/>} />
         <Route path='/get-files/:id' element={<FileDetails/>} />
      
      </Routes>
        </div>
    )
}

export default App

