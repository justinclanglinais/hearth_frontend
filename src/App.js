import React from 'react';
import './App.css';
import CardList from './components/CardList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://lh3.googleusercontent.com/proxy/x82IMNUsPa2QIT2-yV4WyVjAblllysN4Gojn0Tl28MWITDXSWP77VdP12tqCoSpGzz6hv_ZfTZbzqxfBSW5PhsPT-gTYg6GaOzgUgXhCw_SOU0qlkPTD-VnPWAGnJHLKLNceeA" className="App-logo" alt="logo" />
        <p>
          By the Hearth...
        </p>
      </header>
      <div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
