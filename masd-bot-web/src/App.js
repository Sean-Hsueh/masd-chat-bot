import React, { Component } from 'react';

import WebHeader from './containers/WebHeader.js'
import WebBody from './containers/Body.js'
import './styles/main.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <WebHeader/>
        </div>
        <div>
          <WebBody/>
        </div>
      </div>
    );
  }
}

export default App;
