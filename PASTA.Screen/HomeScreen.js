import React from 'react'

import{ NavigationContainer}
from ' react-navigation/native';

import{ createStackNavigation }
from '@react-navigation/stack':

import HomeScreen from
'./screens/homescreen';

import SecondaryScreen from
'./screens/SecondaryScreen';

import CafeScreen from
'./screens/CafeScreen';

import BoloScreen from
'./screen/Boloscree';

import PaoScreen from
'./screen/PaoScreen';

const Stack = createStackNavigation();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Bem-Vindo'}}/>
   
    export default function App(){
    Stack.Screen name="Secondary" component={SecondaryScreen} options={{title: 'Opções Deliciosas'}}/>
     
     Stack.Screen name= "Cafe" component={CafeScreen} options={{title: 'Nosso Café'}}/>

     Stack.Screen name= "Bolo" component={BoloScreen} options={{title: 'Bolo totoso'}}/>

     Stack.Screen name= "Pao" component= {PaoScreen} options={{title:'Paozinho'}}/>
 
     </Stack.Navigator>   
     </NavigationContainer>
    }
  );
}