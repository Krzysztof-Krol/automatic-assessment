import React from 'react';
import './css/App.css';
import logo from './images/royalcode-logo.svg';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-3">Wycena usług programistycznych</h1>
        <Services />
        {/* <Materials /> */}
      </header>
    </div>
  );
}
export default App;