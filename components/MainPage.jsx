import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nav from './Nav';
import Personal from './Personal';

export default function MainPage() {
  
    const Tab = createMaterialTopTabNavigator();
    const BottomTab = createBottomTabNavigator();

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <BottomTab.Navigator tabBarOptions={{activeTintColor:'red',
        style:{backgroundColor:'white'},
        labelStyle:{fontSize:20}}}>
      <BottomTab.Screen name="Home" component={Nav} />
      <BottomTab.Screen name="Personal" component={Personal} />
    </BottomTab.Navigator>
  </SafeAreaView>
  
  );
  }