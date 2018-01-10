import React, { Component } from 'react';
import CleatsContainer from './cleats/CleatsContainer'

const cleats = [
  {
    _id: 'a',
    title: 'Adidas Predator',
    summary: 'Leather boot',
    liked: true,
  },
  {
    _id: 'b',
    title: 'Nike Premiere Pro',
    summary: 'Old school boot with modern touch',
    liked: false,
  },
  {
    _id: 'c',
    title: 'Puma evoTouch',
    summary: 'sock boot combined with kenguru leather',
    liked: false,
  },
]


class App extends Component {
  render() {
      return (
        <div className="App">
        <CleatsContainer cleats={cleats}/>
      </div>
    )
}

}

export default App;
