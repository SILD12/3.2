import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import FormScreen from './Screens/Form'; 
import ProfileScreen from './Screens/Profile';

const Drawer = createDrawerNavigator();

const AVAILABLE_COLORS = {
  Azul: '#007AFF',
  Verde: '#4CAF50',
  Morado: '#9C27B0',
  Rojo: '#FF4136',
};

const SettingsScreen = ({ navigation, setThemeColor }) => {

  return (
    <View style={styles.center}>
      <Text style={styles.text}>Ajustes de la Aplicación</Text>
      <Text style={styles.textSub}>Selecciona un color para la barra superior:</Text>

      <View style={styles.colorOptionsContainer}>
        {Object.keys(AVAILABLE_COLORS).map((colorName) => (
          <TouchableOpacity
            key={colorName}
            style={[
              styles.colorButton,
              { backgroundColor: AVAILABLE_COLORS[colorName] }
            ]}
            onPress={() => {
              setThemeColor(AVAILABLE_COLORS[colorName]);
              navigation.navigate('Forms');
            }}
          >
            <Text style={styles.colorButtonText}>{colorName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default function App() {
  const MI_NOMBRE_COMPLETO = "Sharon Itzel López Delgado - Práctica 3.1";
  const INITIAL_COLOR = AVAILABLE_COLORS.Azul; 
  
  const [headerColor, setHeaderColor] = useState(INITIAL_COLOR);

  const setThemeColor = (color) => {
    setHeaderColor(color);
  };

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Form"
          screenOptions={{
            headerTitle: MI_NOMBRE_COMPLETO,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: headerColor, 
            },
          }}
        >
          <Drawer.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Profile' }}
          />
          <Drawer.Screen 
            name="Form" 
            component={FormScreen} 
            options={{ title: 'Gluestack Form' }}
          />
          <Drawer.Screen 
            name="Settings" 
            options={{ title: 'Cambiar Color de Barra' }}
          >
             
          
             {props => <SettingsScreen {...props} setThemeColor={setThemeColor} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textSub: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  colorOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorButton: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colorButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }

});