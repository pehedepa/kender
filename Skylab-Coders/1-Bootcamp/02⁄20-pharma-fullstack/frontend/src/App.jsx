import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingView from './components/shoppingView';
import store from './redux/store/configureStore';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ShoppingView} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
