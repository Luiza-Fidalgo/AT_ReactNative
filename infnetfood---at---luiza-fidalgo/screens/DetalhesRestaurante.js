import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetalhesRestaurante = ({ route }) => {
  const { restauranteId, nome } = route.params;

  const restaurante = {
    '1': { nome: 'Restaurante 1', endereco: 'Rua do Restaurante 1', itemCardapio: 'Feijoada', imagem: require('../assets/feijoada.jpg') },
    '2': { nome: 'Restaurante 2', endereco: 'Rua do Restaurante 2', itemCardapio: 'Churrasco', imagem: require('../assets/file.jpg') },
    '3': { nome: 'Restaurante 3', endereco: 'Rua do Restaurante 3', itemCardapio: 'Sushi', imagem: require('../assets/sushi.jpg') },
    '4': { nome: 'Restaurante 4', endereco: 'Rua do Restaurante 4', itemCardapio: 'Feijoada', imagem: require('../assets/feijoada.jpg') },
    '5': { nome: 'Restaurante 5', endereco: 'Rua do Restaurante 5', itemCardapio: 'Churrasco', imagem: require('../assets/file.jpg') },
    '6': { nome: 'Restaurante 6', endereco: 'Rua do Restaurante 6', itemCardapio: 'Sushi', imagem: require('../assets/sushi.jpg') },
    '7': { nome: 'Restaurante 7', endereco: 'Rua do Restaurante 7', itemCardapio: 'Feijoada', imagem: require('../assets/feijoada.jpg') },
    '8': { nome: 'Restaurante 8', endereco: 'Rua do Restaurante 8', itemCardapio: 'Churrasco', imagem: require('../assets/file.jpg') },
    '9': { nome: 'Restaurante 9', endereco: 'Rua do Restaurante 9', itemCardapio: 'Sushi', imagem: require('../assets/sushi.jpg') },
    '10': { nome: 'Restaurante 10', endereco: 'Rua do Restaurante 10', itemCardapio: 'Hambúrguer', imagem: require('../assets/hamburguer.jpg') },
  };

  const detalhes = restaurante[restauranteId];

  return (
    <View style={styles.container}>
      <Image source={require('../assets/harry-potter.png')} style={styles.logo} />

      <Image source={detalhes.imagem} style={styles.image} />
      <Text style={styles.title}>{detalhes.nome}</Text>
      <Text style={styles.address}>{detalhes.endereco}</Text>
      <Text style={styles.menuItem}>{`Item do Cardápio: ${detalhes.itemCardapio}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default DetalhesRestaurante;
