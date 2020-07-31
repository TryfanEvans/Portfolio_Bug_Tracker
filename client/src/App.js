import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './components/store.js'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

      </div></Provider>
  );
}

export default App;
