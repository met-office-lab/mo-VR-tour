import React from 'react';
import {
  Animated,
  asset,
  Image,
  VrButton
} from 'react-vr';
import { Easing } from 'react-native';

class CrayMenuButton extends React.Component {
  constructor() {
    super();
    this.state={
      borderColorAnim: new Animated.Value(0),
      borderWidthAnim: new Animated.Value(0.025),
    }
  }

  handleEnterBorderAnim() {
    Animated.parallel([
      Animated.timing(
        this.state.borderColorAnim, {
          toValue: 1,
          easing: Easing.out(Easing.exp)
        }
      ),
      Animated.timing(
        this.state.borderWidthAnim, {
          toValue: 0.05,
          easing: Easing.out(Easing.exp)
        }
      )]
    ).start();
  }

  handleExitBorderAnim() {
    Animated.parallel([
      Animated.timing(
        this.state.borderColorAnim, {
          toValue: 2,
          easing: Easing.out(Easing.exp)
        }
      ),
      Animated.timing(
        this.state.borderWidthAnim, {
          toValue: 0.025,
          easing: Easing.out(Easing.exp)
        }
      )]
    ).start();
  }

  render() {
    return (
      <VrButton
        onClick={() => this.props.handleMenuSelect(1)}
        onEnter={() => this.handleEnterBorderAnim()}
        onExit={() => this.handleExitBorderAnim()}>
        <Animated.Image
          source={asset('CrayMenuScreenshot.png')}
          style={{
            width: 1.0502,
            height: 0.722,
            borderColor: this.state.borderColorAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ['greenyellow', 'white', 'greenyellow']
            }),
            borderWidth: this.state.borderWidthAnim
          }}
        />
      </VrButton>
    )
  }
}

module.exports = CrayMenuButton;
