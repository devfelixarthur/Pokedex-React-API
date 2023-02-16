
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Pokedex from '../pages/pokedex/Pokedex';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/details/:name" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}
