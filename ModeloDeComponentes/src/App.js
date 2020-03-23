import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import StylePadrao from './StylePadrao';

export default class App extends Component {
  render() {
    return (
      <View style={StylePadrao.container}>
        <Image
          style={StylePadrao.imagemLogo}
          source={require('./assets/logo.jpg')}
        />
        <Text style={StylePadrao.wellcome}>Wellcome Looknet</Text>
        <Text style={StylePadrao.slogan}>Marketing Digital</Text>
      </View>
    );
  }
}
