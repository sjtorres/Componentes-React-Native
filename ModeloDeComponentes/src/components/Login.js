import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

export default class TelaLogin extends Component {
  clicou = () => {
    Alert.alert('Looknet Digital', 'Você clicou em mim');
  };

  state = {
    nome: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagemLogo}
          source={require('../assets/logo.jpg')}
        />

        <TextInput
          style={styles.input}
          onChangeText={text => (this.state.nome = text)}
          placeholder="Digite seu email"
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Home', {nome: this.state.nome});
          }}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>
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
  imagemLogo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 15,
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    padding: 10,
    color: 'green',
  },
  botao: {
    width: 300,
    marginTop: 10,
    height: 42,
    backgroundColor: '#306d4f',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
