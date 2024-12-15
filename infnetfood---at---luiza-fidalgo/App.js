import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Produtos from './screens/Produtos';
import Profile from './screens/Profile';
import OrdersScreen from './screens/OrdersScreen';
import MapScreen from './screens/MapaSimulado';
import DetalhesRestaurante from './screens/DetalhesRestaurante'; 
import Checkout from './screens/Checkout'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Produtos" 
          component={Produtos} 
          options={({ route }) => ({ title: route.params?.nome || 'Produtos' })} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
        />
        <Stack.Screen 
          name="Orders" 
          component={OrdersScreen} 
          options={{ title: 'Seus Pedidos' }} 
        />
        <Stack.Screen 
          name="MapScreen" 
          component={MapScreen}  
          options={{ title: 'Mapa Simulado' }} 
        />
        <Stack.Screen 
          name="DetalhesRestaurante" 
          component={DetalhesRestaurante} 
          options={{ title: 'Detalhes do Restaurante' }} 
        />
        <Stack.Screen 
          name="Checkout" 
          component={Checkout} 
          options={{ title: 'Finalizar Pedido' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
