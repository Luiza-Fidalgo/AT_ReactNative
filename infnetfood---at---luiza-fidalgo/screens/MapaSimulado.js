import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapaSimulado = ({ navigation }) => {
  const restaurantes = [
    { id: '1', nome: 'Restaurante 1', lat: -22.9068, lon: -43.1729 },
    { id: '2', nome: 'Restaurante 2', lat: -22.9070, lon: -43.1735 },
    { id: '3', nome: 'Restaurante 3', lat: -22.9072, lon: -43.1740 },
    { id: '4', nome: 'Restaurante 4', lat: -22.9074, lon: -43.1745 },
    { id: '5', nome: 'Restaurante 5', lat: -22.9076, lon: -43.1750 },
    { id: '6', nome: 'Restaurante 6', lat: -22.9080, lon: -43.1755 },
    { id: '7', nome: 'Restaurante 7', lat: -22.9082, lon: -43.1760 },
    { id: '8', nome: 'Restaurante 8', lat: -22.9084, lon: -43.1765 },
    { id: '9', nome: 'Restaurante 9', lat: -22.9086, lon: -43.1770 },
    { id: '10', nome: 'Restaurante 10', lat: -22.9090, lon: -43.1775 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa Simulado - Restaurantes no Centro do Rio</Text>
      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.9068,
          longitude: -43.1729,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.lat,
              longitude: restaurante.lon,
            }}
            title={restaurante.nome}
            onPress={() =>
              navigation.navigate('DetalhesRestaurante', {
                restauranteId: restaurante.id,
                nome: restaurante.nome,
              })
            }
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapaSimulado;
