import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero, MenNewArrivals, Product } from './pages/pages_index';
import { Header } from './components/comp_index';


const App = () => {

 
  
  return <>
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/MenNewArrivals' element={<MenNewArrivals />} />
        <Route path='/Product/:code' element={<Product />} />

        
      </Routes>
    </BrowserRouter>
    </>
}

export default App