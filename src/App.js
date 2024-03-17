import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {HomePage} from './pages/homepage';
import {Location} from './pages/location';
import {Recommender} from './pages/recommender';
import {Workshop} from './pages/workshop';
import ResponsiveAppBar from './components/navbar';
import { BackgroundWrapper } from './components/backgroundWrapper';
import { Login } from './pages/login';
import { Register } from './pages/signup';
import { Protected } from './components/protectedWrapper';
import { Unprotected } from './components/unprotectedWrapper';

function App() {
  let token = localStorage.getItem('token');
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes BrowserRouter>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Unprotected><Login /></Unprotected>} />
        <Route path='/signup' element={<Unprotected><Register /></Unprotected>} />
        <Route path='/location' element={<Protected><BackgroundWrapper><Location /></BackgroundWrapper></Protected>} />
        <Route path='/recommender' element={<Protected><BackgroundWrapper><Recommender /></BackgroundWrapper></Protected>} />
        <Route path='/workshop' element={<Protected><BackgroundWrapper><Workshop /></BackgroundWrapper></Protected>} />
        <Route path='/*' element={<Navigate to={token ? '/' : '/login'} replace={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
