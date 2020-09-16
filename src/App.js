import React from 'react';
import './App.css';
import CardList from './components/CardList.js'

class App extends React.Component {
  state = {
    loggedIn : false
  }
  handleClick = () => {
    this.setState({
      loggedIn : !this.state.loggedIn
    })
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://d2q63o9r0h0ohi.cloudfront.net/images/npe/header/rose_icon_header-2c41dc61329a7d80e3f277baf149ac1fa7f6ba9b0095cbbec5b39ab21b164bb1c5909a06b6880f75e6d99c15787e4b0f246dd9d78ab8682c3bd5e0f068b0eb63.png" className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>
            Toggle Login
          </button>
          {this.state.loggedIn ? <h3>Yes</h3> : <h3>No</h3>}
          <p>
            By the Hearth...
          </p>
        </header>
        <div>
          <CardList loggedIn={this.state.loggedIn}/>
        </div>
      </div>
    );
  }
}

export default App;
