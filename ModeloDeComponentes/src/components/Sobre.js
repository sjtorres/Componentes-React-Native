import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Sobre extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo a página Sobre!</Text>
        <Button
          title="Perfil"
          onPress={() => this.props.navigation.navigate('Profile')}
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
});
