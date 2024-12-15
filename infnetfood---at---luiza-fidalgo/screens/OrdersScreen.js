import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Alert } from 'react-native';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      title: 'Strogonoff e Salpicão, Águas e Pudim',
      status: 'Preparando pedido',
      statusIndex: 2,
      price: 87.0,
      items: [
        { name: 'Água', price: 3.0, quantity: 2 },
        { name: 'Pudim', price: 6.0, quantity: 1 },
        { name: 'Strogonoff', price: 40.0, quantity: 1 },
        { name: 'Salpicão', price: 35.0, quantity: 1 },
      ],
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress] = useState(new Animated.Value(0));
  const [orderStatusIndex, setOrderStatusIndex] = useState(2);
  const [rating, setRating] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);  

  const discountCoupon = "CidMelhorProf";
  const discountPercentage = 0.1;

  const calculateTotal = (price) => {
    return price - (price * discountPercentage);
  };

  const startLoadingAnimation = useCallback(() => {
    setLoading(true);
    Animated.timing(progress, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: false,
    }).start(() => {
      setLoading(false);
      setOrderStatusIndex(3);
      Alert.alert(
        "Status do Pedido",
        "Seu pedido está a caminho!",
        [{ text: "OK" }]
      );
    });
  }, [progress]);

  useEffect(() => {
    Alert.alert(
      "Status do Pedido",
      "O seu pedido está sendo preparado!",
      [{ text: "OK" }]
    );
    startLoadingAnimation();
  }, [startLoadingAnimation]);

  const handleDelivered = () => {
    setIsDelivered(true);
    Alert.alert(
      "Avaliação do Pedido",
      "Por favor, avalie o pedido. Bom apetite!",
      [{ text: "OK" }]
    );
  };

  const handleRating = (star) => {
    setRating(star);
    Alert.alert(
      "Agradecemos sua Avaliação!",
      "Você ganhou 5% de desconto na sua próxima compra!",
      [{ text: "OK" }]
    );
  };

  const renderOrder = ({ item }) => {
    const statuses = [
      'Pagamento confirmado',
      'Pedido enviado para a cozinha',
      'Preparando pedido',
      'Pedido saiu para entrega',
      'Pedido entregue',
    ];

    const handleDetailsPress = () => {
      setSelectedOrder(item);
    };

    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <View style={styles.statusContainer}>
          {statuses.map((status, index) => (
            <View key={index} style={styles.statusItem}>
              <View
                style={[styles.statusCircle, index <= orderStatusIndex && styles.activeStatus]}
              />
              <Text style={styles.statusText}>{status}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.detailsButton} onPress={handleDetailsPress}>
          <Text style={styles.detailsButtonText}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderOrderDetails = () => {
    if (!selectedOrder) return null;

    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Detalhes do Pedido</Text>
        {selectedOrder.items.map((item, index) => (
          <View key={index} style={styles.detailsItem}>
            <Text style={styles.detailsText}>{item.name}</Text>
            <Text style={styles.detailsText}>Preço: R$ {item.price.toFixed(2)}</Text>
            <Text style={styles.detailsText}>Quantidade: {item.quantity}</Text>
          </View>
        ))}
        <Text style={styles.detailsText}>
          Total do Pedido: R$ {selectedOrder.price.toFixed(2)}
        </Text>
      </View>
    );
  };

  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Text style={[styles.star, star <= rating && styles.activeStar]}>⭐</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Pedidos</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.list}
      />
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Avalie seu pedido</Text>
        {renderStars()}
        {isDelivered && (
          <TouchableOpacity style={styles.confirmButton} onPress={handleDelivered}>
            <Text style={styles.confirmButtonText}>Pedido chegou</Text>
          </TouchableOpacity>
        )}
        {isDelivered && !isConfirmed && (
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirmar Recebimento</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total: R$ {orders[0].price.toFixed(2)}</Text>
        <Text style={styles.discountText}>Desconto (Cupom: {discountCoupon}): -R$ {(orders[0].price * discountPercentage).toFixed(2)}</Text>
        <Text style={styles.finalTotal}>
          Total com desconto: R$ {calculateTotal(orders[0].price).toFixed(2)}
        </Text>
      </View>
      {renderOrderDetails()}
      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Preparando seu pedido...</Text>
          <Animated.View
            style={[styles.loadingBar, { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  orderItem: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  activeStatus: {
    backgroundColor: '#FFD700',
  },
  statusText: {
    fontSize: 14,
    color: '#333',
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 30,
    color: '#ddd',
    marginHorizontal: 3,
  },
  activeStar: {
    color: '#FFD700',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: '#666',
  },
  finalTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  loadingBar: {
    marginTop: 10,
    height: 5,
    backgroundColor: '#FFD700',
    borderRadius: 3,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#32CD32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsItem: {
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: '#333',
  },
});

export default OrdersScreen;
