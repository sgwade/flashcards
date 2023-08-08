import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
};
