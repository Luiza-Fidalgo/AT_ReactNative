import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Home = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categorias = [
    { 
      id: '1', 
      nome: 'Lanches', 
      imagem: require('../assets/gryffindor.jpg'), 
      produtos: [
        { nome: 'Hambúrguer', preco: 15.00, imagem: require('../assets/hamburguer.jpg') },
        { nome: 'Pizza', preco: 30.00, imagem: require('../assets/pizza.jpg') },
        { nome: 'Cachorro-quente', preco: 10.00, imagem: require('../assets/hotdog.jpg') },
      ]
    },
    { 
      id: '2', 
      nome: 'Bebidas', 
      imagem: require('../assets/hufflepuff.jpg'), 
      produtos: [
        { nome: 'Suco', preco: 5.00, imagem: require('../assets/suco.jpg') },
        { nome: 'Batida', preco: 6.00, imagem: require('../assets/batida.jpg') },
        { nome: 'Água', preco: 3.00, imagem: require('../assets/agua.jpg') },
      ]
    },
    { 
      id: '3', 
      nome: 'Sobremesas', 
      imagem: require('../assets/ravenclaw.jpg'), 
      produtos: [
        { nome: 'Bolo', preco: 8.00, imagem: require('../assets/bolo.jpg') },
        { nome: 'Sorvete', preco: 7.00, imagem: require('../assets/sorvete.jpg') },
        { nome: 'Pudim', preco: 6.00, imagem: require('../assets/pudim.jpg') },
      ]
    },
    { 
      id: '4', 
      nome: 'Almoço', 
      imagem: require('../assets/slytherin.jpg'), 
      produtos: [
        { nome: 'Strogonoff', preco: 40.00, imagem: require('../assets/strogonoff.jpg') },
        { nome: 'Salpicao', preco: 35.00, imagem: require('../assets/salpicao.jpg') },
        { nome: 'Filé mignon', preco: 60.00, imagem: require('../assets/file.jpg') },
      ]
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[ 
        styles.container, 
        { backgroundColor: isDarkMode ? '#1C1C1C' : '#F4E1A1' }
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={() => navigation.navigate('Profile')} 
        >
          <Icon name="account" size={30} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={() => navigation.navigate('Orders')} 
        >
          <Icon name="broom" size={30} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleTheme} style={styles.switch}>
          <Icon name="moon-waxing-crescent" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#800000' }]}>Bem-vindo à Hogwarts!</Text>

      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Produtos', { nome: item.nome, produtos: item.produtos })} 
          >
            <Image source={item.imagem} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
      
      <Button 
        title="Ir para o Mapa Simulado"
        onPress={() => navigation.navigate('MapScreen')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: '#800000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cartButton: {
    marginLeft: 20,
    backgroundColor: '#800000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  switch: {
    marginLeft: 20,
    backgroundColor: '#800000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Garamond',
  },
  flatList: {
    marginTop: 20,
  },
  categoryItem: {
    backgroundColor: '#1C1C1C',
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#B8860B',
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    fontFamily: 'Garamond',
  },
});

export default Home;
