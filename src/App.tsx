import * as React from 'react';

import './App.css';
import Lashies from './assets/lash.jpg';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          <img src={Lashies} alt="eyelashes"/>
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
