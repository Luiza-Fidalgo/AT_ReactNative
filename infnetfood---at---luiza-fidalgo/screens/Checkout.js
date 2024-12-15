import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const Checkout = ({ route }) => {
  const { carrinho } = route.params;

  const [endereco, setEndereco] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [erroEndereco, setErroEndereco] = useState(false);

  const calcularTotal = () => {
    return carrinho
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
      .toFixed(2);
  };

  const validarFormulario = () => {
    if (endereco.trim() === '') {
      setErroEndereco(true);
      return false;
    }
    setErroEndereco(false);
    return true;
  };

  const finalizarPedido = () => {
    if (validarFormulario()) {
      alert('Pedido finalizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Pedido</Text>
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

      <Text style={styles.inputLabel}>Endereço de Entrega:</Text>
      <TextInput
        style={[styles.input, erroEndereco && styles.inputError]}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      {erroEndereco && <Text style={styles.errorText}>Endereço é obrigatório</Text>}

      <Text style={styles.inputLabel}>Método de Pagamento:</Text>
      <Picker
        selectedValue={metodoPagamento}
        style={styles.picker}
        onValueChange={(itemValue) => setMetodoPagamento(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Pix" value="pix" />
        <Picker.Item label="Dinheiro" value="dinheiro" />
        <Picker.Item label="Cartão de Crédito" value="cartao" />
      </Picker>

      <TouchableOpacity style={styles.finalizarButton} onPress={finalizarPedido}>
        <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
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
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
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

export default Checkout;
