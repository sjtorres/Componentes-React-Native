import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',

    drawerIcon: ({focused, tintColor}) => {
      <Image
        style={styles.logoMenu}
        source={require('../assets/Perfil-01.jpg')}
      />;
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/Perfil-01.jpg')}
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
