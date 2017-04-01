import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class Body extends Component {
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
        <div>
          <TextField style={styles.inputBox}
              hintText="What's the problem?"
              fullWidth={true}
              multiLine={true}
              rows={4}
            /><br />
        </div>
        <div>
          <FlatButton label="Send" />
          <br />
        </div>
      </div>
    );
  }
}

var styles = {
  root: {
  },
  inputBox: {
    color: '#666',
    fontSize: '18px',
    padding: '10px',
  },
  sendButton: {

  },
};

export default Body;
