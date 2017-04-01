import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Header from './containers/header.js'
import Body from './containers/body.js'
import './styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => {this.setState({value});
    console.log('press');
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div>
          <Body/>
        </div>
      </div>
    );
  }
}

var styles = {
  
};

export default App;
