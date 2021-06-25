import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import NoticeDetail from './components/NoticeDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

    <Stack.Navigator initialRouteName="LoginPage">

     <Stack.Screen name="LoginPage"
     component={LoginPage}/>

    <Stack.Screen name="MainPage"
     component={MainPage}/>

    <Stack.Screen name="NoticeDetail"
     component={NoticeDetail}/>
     
    </Stack.Navigator>
  </NavigationContainer>
  );
};