import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, Button} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={require('../assets/Perfil-01.jpg')}
        />

        <Text style={styles.textoOla}>Olá {nomeUsuario} !</Text>
        <Text style={styles.textoProfile}>Esse é o seu Profile</Text>
        <Button
          title="Sobre"
          onPress={() => this.props.navigation.navigate('Sobre')}
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
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textoOla: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textoProfile: {
    fontSize: 16,
    color: '#fff',
  },
});
