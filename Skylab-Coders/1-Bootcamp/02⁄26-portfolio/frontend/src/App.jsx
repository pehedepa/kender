import React from 'react';
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import Landing from './pages/landing';
import store from './redux/stores/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <main className="main-wrapper">
        <NavBar />
        <Landing />

      </main>
    </Provider>
  );
}

export default App;
