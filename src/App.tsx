import * as React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';

class App extends React.Component {
  public render() {

    const currentYear = new Date().getFullYear();
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <div>
          <p>&#169;	Lotties Beauty Lounge {currentYear}</p>
        </div>
      </div>
    );
  }
}

export default App;
