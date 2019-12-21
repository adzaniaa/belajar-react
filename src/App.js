import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profil from './pages/profil';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/profil" component={Profil}/>
      <Route path="/about" component={About}/>
    </Switch>
  );
}

export default App;
