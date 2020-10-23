import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList.js'
import { Api } from './services/Api.js'

function App () {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(fetchCards)
  
  function fetchCards () {
    Api.cards.fetchCards().then(data=>{
      setCards(data);
    })
  }
  function handleClickLogin () {
    setLoggedIn(!loggedIn)
  }
  function handleClickContentLoad () {
    setLoaded(!loaded)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://d2q63o9r0h0ohi.cloudfront.net/images/npe/header/rose_icon_header-2c41dc61329a7d80e3f277baf149ac1fa7f6ba9b0095cbbec5b39ab21b164bb1c5909a06b6880f75e6d99c15787e4b0f246dd9d78ab8682c3bd5e0f068b0eb63.png" className="App-logo" alt="logo" />
        <button onClick={handleClickLogin}>
          Toggle Login
        </button>
        {loggedIn ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
        <button onClick={handleClickContentLoad}>
          Toggle Content Loaded
        </button>
        {loaded ? <h3>Content Loaded</h3> : <h3>Content Not Loaded</h3>}
      </header>
      <div>
        <CardList style="container" loggedIn={loggedIn} cards={cards} loaded={loaded}/>
      </div>
    </div>
  );
}

export default App;
