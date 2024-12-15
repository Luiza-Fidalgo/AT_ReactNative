import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Animated, Image, ScrollView } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const [bounceValue] = useState(new Animated.Value(1));

  const handleLogin = () => {
    setErroEmail('');
    setErroSenha('');

    if (!email || !senha) {
      if (!email) setErroEmail('O e-mail é obrigatório.');
      if (!senha) setErroSenha('A senha é obrigatória.');
      return;
    }

    navigation.navigate('Home');
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.spring(bounceValue, {
        toValue: 1.2,  
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 1,  
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/harry-potter.png')} 
        style={styles.logo} 
      />

      <Text style={styles.title}>InfnetFood</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {erroEmail ? <Text style={styles.errorText}>{erroEmail}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      {erroSenha ? <Text style={styles.errorText}>{erroSenha}</Text> : null}

      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <Button
          title="Entrar"
          color="#900" 
          onPress={() => {
            animateButton();
            handleLogin();
          }}
        />
      </Animated.View>

      <Text style={styles.footerText}>Ou entre com o Google</Text>
      <Text style={styles.quote}>
        "A felicidade pode ser encontrada mesmo nas horas mais sombrias, se alguém lembrar de acender a luz."
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2C2F3F', // luiza, salvar cor do harry potter
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,  
    color: '#fff',
    backgroundColor: '#333', 
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  footerText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  quote: {
    marginTop: 30,
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
});

export default Login;
