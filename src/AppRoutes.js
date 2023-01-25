import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./Pages/Home.js"
import {Index} from "./Pages/Index.js"
import {NotFound} from "./Pages/NotFound"

const AppRoutes = () => {
    return (
       
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
       
    )
}
export default AppRoutes;