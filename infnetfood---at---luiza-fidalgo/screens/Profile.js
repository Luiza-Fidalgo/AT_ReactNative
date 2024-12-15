import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const user = {
    name: 'Marco Madureira',
    email: 'marco@exemplo.com',
    photo: require('../assets/mulher.jpg'), 
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#1C1C1C' : '#F4E1A1' },
      ]}
    >
      <Image source={user.photo} style={styles.photo} />
      <Text style={[styles.title, { color: isDarkMode ? '#FFD700' : '#800000' }]}>Perfil do Usuário</Text>
      <Text style={[styles.info, { color: isDarkMode ? '#FFF' : '#000' }]}>Nome: {user.name}</Text>
      <Text style={[styles.info, { color: isDarkMode ? '#FFF' : '#000' }]}>E-mail: {user.email}</Text>

      <View style={styles.settingsContainer}>
        <Text style={[styles.settingsTitle, { color: isDarkMode ? '#FFF' : '#000' }]}>Configurações</Text>
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#FFF' : '#FFF' }]}>
          <Text style={[styles.settingLabel, { color: isDarkMode ? '#000' : '#000' }]}>Modo Escuro</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#FFD700' : '#f4f3f4'}
          />
        </View>
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#FFF' : '#FFF' }]}>
          <Text style={[styles.settingLabel, { color: isDarkMode ? '#000' : '#000' }]}>Notificações</Text>
          <TouchableOpacity style={styles.button} onPress={toggleNotifications}>
            <Text style={styles.buttonText}>{notificationsEnabled ? 'Desativar' : 'Ativar'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#FFF' : '#FFF' }]}>
          <Text style={[styles.settingLabel, { color: isDarkMode ? '#000' : '#000' }]}>Localização</Text>
          <TouchableOpacity style={styles.button} onPress={toggleLocation}>
            <Text style={styles.buttonText}>{locationEnabled ? 'Desativar' : 'Ativar'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
  settingsContainer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B8860B',
  },
  settingLabel: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Profile;
