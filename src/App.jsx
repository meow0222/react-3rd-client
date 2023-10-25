// import { useState } from 'react'
import React from 'react';
import './App.css';
import MainFrame from './components/MainFrame';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <MainFrame/>
    </Router>      
  );
};

export default App;
