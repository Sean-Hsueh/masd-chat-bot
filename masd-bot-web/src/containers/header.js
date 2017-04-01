import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => {this.setState({value});
    console.log('press');
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.title}> Pick a model </div>
        <div style={styles.dropDown}>
          <DropDownMenu value={this.state.value} labelStyle={styles.dropDownItem} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="M8" />
            <MenuItem value={2} primaryText="M9" />
          </DropDownMenu>
        </div>
      </div>
    );
  }
}

var styles = {
  root: {
    display: 'flex',
  },
  title: {
    color: '#a5cf4c',
    fontSize: '30px',
    width: '250px',
    position: 'absolute',
    left: '50px',
  },
  dropDown: {
    position: 'absolute',
    right: '50px',
    top: '0px',
  },
  dropDownItem: {
    color: 'white'
  },
};

export default Header;
