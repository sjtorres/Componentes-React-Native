import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    drawerLabel: 'Configuração',

    drawerIcon: ({focused, tintColor}) => {
      <Image
        style={styles.logoMenu}
        source={require('../assets/Perfil-02.jpg')}
      />;
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/Perfil-02.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#329965',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  logoMenu: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
