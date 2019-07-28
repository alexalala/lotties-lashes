import * as React from 'react';

import './App.css';
import Lashies from './assets/lash.jpg';
import Navigation from './components/Navigation';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          <img src={Lashies} alt="eyelashes"/>
          <Navigation />
        </header>
        <p>heelo</p>
      </div>
    );
  }
}

export default App;
