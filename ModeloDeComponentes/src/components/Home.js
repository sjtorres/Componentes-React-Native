import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        <Image
          style={styles.imagemProfile}
          source={require('../assets/Perfil-01.jpg')}
        />

        <Text style={styles.textoBemVindo}>Olá {nomeUsuario} !!!</Text>
        <Text style={styles.texto2}>Esse é o seu Profile</Text>
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
  textoBemVindo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  texto2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagemProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
});
