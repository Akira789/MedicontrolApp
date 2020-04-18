import 'react-native-gesture-handler';
import React from 'react';
import Inicio from './screen/Inicio';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Mydatepicker from './screen/Mydatepicker';
import Accionador from './screen/Accionador';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Datos from './screen/Datos';
//import Principal from './screen/Principal';

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Mydatepicker" component={Mydatepicker}/>
        <Stack.Screen name="Bluetooth" component={Accionador} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;