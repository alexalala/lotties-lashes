import * as React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          <div className="overlay-container">
            <div className="heading-container">
              <h1>Lotties Lashes</h1>
            </div>
          </div>
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
