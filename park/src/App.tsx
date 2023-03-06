import React, { useContext, useState } from 'react';

import './App.css';
import UserForm from './components/UserForm';
import { VehicleDetails } from './components/VehicleDetails';

function App() {
  
  return (

      
      <div className="App">
        <UserForm/>
        <VehicleDetails />
      </div>
   
  );
}

export default App;
