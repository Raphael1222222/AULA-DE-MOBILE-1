import React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/Stack';

import HomeScreen from './PASTA.Screen/HomeScreen';
import SecondaryScreen from './PASTA.Screen/SecondaryScreen';
import CafeScreen from './PASTA.Screen/CafeScreen';
import BoloScreen from './PASTA.Screen/BoloScreen';
import PaoScreen from './PASTA.Screen/PaoScreen';

const Stack = createStackNavigation();

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator intialRouteName= "Home">

      <Stack.Screen name ="Home" component= {HomeScreen} options= {{ title: 'Bem-Vindo' }} />

        <Stack.Screen name= "Secondary" component= {SecondaryScreen} options= {{title: 'Opções Deliciosas' }} />

        <Stack.Screen name= "Cafe" component={CafeScreen} options= {{title: 'Nosso Cafe'}} />

        <Stack.Screen name= "Bolo" component={BoloScreen} options= {{title: 'Bolo de Chocolate'}} /> 

     <Stack.Screen name= "Pao" component={PaoScreen} options= {{title: 'Pão Caseiro'}} />

    </Stack.Navigator>
    </NavigationContainer>
   );
}
