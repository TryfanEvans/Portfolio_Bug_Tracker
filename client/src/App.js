import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './components/store.js'
import Navbar from './components/navbar.js'
import BugList from './components/bugList.js'
import './App.css';
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <BugList />
      </div></Provider>
  );
}

export default App;
