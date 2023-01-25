import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from '../AppRoutes.js';
import '../styles/App.css';
import {NavBar} from './NavBar';
const App = () => {

  return (
    <BrowserRouter>
      <div id="main">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>

  )
}


export default App;
