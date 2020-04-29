import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Asteroid from './components/asteroidList/AsteroidList';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/asteroid-list" component={Asteroid}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
