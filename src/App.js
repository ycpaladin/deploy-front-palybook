import React, { Component } from 'react';
import {Demo02} from './components/Demo02';
// import logo from './logo.svg';
import user from './state';
import Count from './hooks'
import './App.css';

// const user = new User()
// const user = 


// const Xxx = XXX();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Demo01 user={user}/> */}
        <Demo02 user={user} />
        <Count />
      </div>
    );
  }
}

export default App;
