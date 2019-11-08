import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Wizard from './components/Wizard/Wizard';
import House from './components/House/House';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Wizard/>
      <House/>
      <Dashboard/>
    </div>
  );
}

export default App;
