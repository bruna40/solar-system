import React from 'react';
import Header from './components/generics/Header/index';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <SolarSystem />
      <Missions />
    </main>
  </>
);

export default App;
