import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import { sendResponses, textFieldIssueChanged } from '../actions'

const Body = ({ solutions, onSendBtnClicked, onTextFieldIssueChanged }) => {
  const getListItems = (items) => {
    console.log('getListItems, items', items)
    return items.map((item, i) => {
      return (
      <ListItem key={i} >
        <a target='_blank' href={item.link}>
          {item.abstract}
        </a>
      </ListItem>);
    }
    );
  }

  return (
  <div style={styles.root}>
    <div>
      <TextField style={styles.inputBox}
          hintText="What's the problem?"
          multiLine={true}
          rows={4}
          onChange={(event, value) => onTextFieldIssueChanged(value)}
        /><br />
    </div>
    <div>
      <FlatButton label="Send" onClick={() => onSendBtnClicked()}/>
      <br />
      <br />
      <Divider />
      <br />
      <List>
        { getListItems(solutions) }
      </List>
    </div>
  </div>
)};

var styles = {
  root: {
  },
  inputBox: {
    color: '#666',
    fontSize: '18px',
    padding: '10px',
    minWidth: '60%',
  },
  sendButton: {
  },
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps state.solutions: ', state.solutions)
  return {
    solutions: state.solutions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendBtnClicked: () => {
      dispatch(sendResponses())
    },
    onTextFieldIssueChanged: (value) => {
      dispatch(textFieldIssueChanged(value))
    }
  }
}

const WebBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

Body.propTypes = {
  solutions: PropTypes.array.isRequired,
  onSendBtnClicked: PropTypes.func.isRequired,
  onTextFieldIssueChanged: PropTypes.func.isRequired,
}

export default WebBody;
