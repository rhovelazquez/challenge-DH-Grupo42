import { useState } from 'react'
import Demo from './components/Demo.jsx'
import React from 'react'

import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
// import { Routes, Route, Router } from 'react-router-dom';
import Profession from './components/Profession.jsx';
import Card from './components/Card.jsx';
import Acceso from './components/Acceso.jsx';
import Menu from './components/Menu.jsx';
import Formu from './components/Formulary.jsx';
import Contact from './components/Contact.jsx';

//css



function App() {
  return (
    <>
      <div className="dashboard">
        {/* <!--Sección de acceso--> */}
        <Acceso/>
        {/* //fin de seccion de acceso */}
        {/* //seccion de menu */}
        <Menu/>
        {/* //fin de seccion de menu */}
        {/* Ruteo */}
        {/* Envuelve todo en un componente Router */}
        <Router>
          <Routes>
            <Route path='/' exact element={<Demo />} />
            <Route path='/candidates' exact element={<Card />} />
            <Route path='/profession' exact element={<Profession />} />
            <Route path='/register' exact element={<Formu/>} />
            <Route path='/contact' exact element={<Contact/>} />
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App
