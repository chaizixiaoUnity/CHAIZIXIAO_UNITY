import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from './HomePage';
import NextPage from './NextPage';
import LastPage from './LastPage';

export default function TabNavi() {
  
    const Tab = createMaterialTopTabNavigator();

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <StatusBar style={'auto'}/>
      <Tab.Navigator style={{}}
        tabBarOptions={{
          labelStyle:{fontSize:16},
          indicatorStyle:{
            backgroundColor:'blue',
            height:3
          }
      }}>

      <Tab.Screen name="HomePage" component={HomePage} 
      options={{tabBarLabel:'MainPage'}}/>

      <Tab.Screen name="NextPage" component={NextPage} 
      options={{tabBarLabel:'News'}}/>

      <Tab.Screen name="LastPage" component={LastPage} 
      options={{tabBarLabel:'Report'}}/>

    </Tab.Navigator>
  </SafeAreaView>
  
  );
  }