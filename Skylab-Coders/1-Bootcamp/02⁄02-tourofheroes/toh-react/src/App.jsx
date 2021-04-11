import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import HeroDetail from './components/hero-detail/hero-detail';
import Heroes from './components/heroes/heroes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/detail/:heroId" component={HeroDetail} />
          <Redirect path="/dashboard" to="/" />
          <Route>
            <h1>End of File!</h1>
            <Link to="/">Go to Dashboard</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
