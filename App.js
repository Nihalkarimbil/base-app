import React, { Component } from 'react';
import Head from './components/Hedder';
import Body from './components/Body';
import Foot from './components/Footer';
import './App.css';




function App() {
  return (
    <div className='App'>
     <Head />
     <Body />
     <Foot/>
    </div>
  );
}


export default App;

