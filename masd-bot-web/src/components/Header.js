import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const Header = ({ selectedModel, models, onModelClicked }) => {
  const menuItems = models.map((model, i) =>
    <MenuItem value={i} key={i} primaryText={models[i]} />
  );

  return (
  <div style={styles.root}>
    <div style={styles.title}> HTC problem solver </div>
    <div style={styles.dropDown}>
      <DropDownMenu value={selectedModel} labelStyle={styles.dropDownItem}
        onChange={(event, key) => onModelClicked(key)}>
          {menuItems}
      </DropDownMenu>
    </div>
  </div>
)}


var styles = {
  root: {
    display: 'flex',
  },
  title: {
    color: '#a5cf4c',
    fontSize: '30px',
    width: '330px',
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

Header.propTypes = {
  selectedModel: PropTypes.number.isRequired,
  models: PropTypes.array.isRequired,
  onModelClicked: PropTypes.func.isRequired,
}

export default Header;
