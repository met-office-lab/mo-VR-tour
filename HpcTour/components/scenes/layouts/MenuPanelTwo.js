import React from 'react';
import {
  View
} from 'react-vr';
import MenuButton from './elements/MenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import styles from '../../styles.js';

class MenuPanelTwo extends React.Component {
  render() {
    return (
      <View style={styles.menuPanel}>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(3)}
            source={'TelephoneExchangeMenuScreenshot.png'}/>
          <MenuItemTitle text={'Telephone Exchange'}/>
        </View>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(4)}
            source={'HallEntranceMenuScreenshot.png'}/>
          <MenuItemTitle text={'Entrance'}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelTwo;
