import React, { Component } from 'react';
import CleatsContainer from './cleats/CleatsContainer'
import './App.css';

const cleats = [
  {
    title: 'Adidas Predator',
    summary: 'Leather boot',
  },
  {
    title: 'Nike Premiere Pro',
    summary: 'Old school boot with modern touch'
  },
  {
    title: 'Puma evoTouch',
    summary: 'sock boot combined with kenguru leather'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <CleatsContainer cleats={ cleats } />
      </div>
    );
  }
}

export default App;
