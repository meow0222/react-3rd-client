// import { useState } from 'react'
import React from 'react';
import './App.css';
import MainFrame from './components/MainFrame';
import { BrowserRouter as Router } from 'react-router-dom';
import helloContext from './components/admin';

function App() {

  return (
      <Router>
        <helloContext.Provider value= {"Hello Dougal"}>
          <MainFrame/>
        </helloContext.Provider>      
      </Router>
  );
};

export default App;
