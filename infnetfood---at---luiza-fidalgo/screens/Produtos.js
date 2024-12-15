import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Produtos = ({ route, navigation }) => {
  const { produtos } = route.params;

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.nome === produto.nome);
      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.nome === produto.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    });
  };

  const calcularTotal = () => {
    return carrinho
      .reduce((total, item) => {
        const preco = item.preco || 0; 
        const quantidade = item.quantidade || 0; 
        return total + (preco * quantidade);
      }, 0)
      .toFixed(2);
  };

  const finalizarPedido = () => {
    navigation.navigate('Checkout', { carrinho });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productText}>{item.nome}</Text>
            <Text style={styles.productPrice}>R$ {item.preco ? item.preco.toFixed(2) : '0.00'}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrinho de Compras</Text>
        {carrinho.length === 0 ? (
          <Text style={styles.emptyCart}>Seu carrinho está vazio.</Text>
        ) : (
          <FlatList
            data={carrinho}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.cartText}>{item.nome} (x{item.quantidade})</Text>
                <Text style={styles.cartText}>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>

        <TouchableOpacity
          style={styles.finalizarButton}
          onPress={finalizarPedido}
        >
          <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#D2691E',
    fontFamily: 'Garamond',
  },
  listContent: {
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#D2691E',
  },
  productText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
    fontFamily: 'Garamond',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#D2691E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#D2691E',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cartText: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#D2691E',
  },
  finalizarButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  finalizarButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Produtos;
