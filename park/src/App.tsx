import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/inputForm';
import store from './components/store';
import CarDetails from './components/carDetails';
function App() {
  return (
    
      <div className="App">
        {/* <InputForm /> */}
        <CarDetails />
      </div>
   
  );
}

export default App;
