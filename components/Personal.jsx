import React from 'react';
import {
  Text,
  Button,
  SafeAreaView,
} from 'react-native';

export default function Personal(props) {
  //
  return (
    <SafeAreaView style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'white'}}>
        <Text>Personal Page</Text>
        <Button title={'LogOut'} 
         onPress={()=>{
            props.navigation.navigate('LoginPage')
            }}/>
    </SafeAreaView>
  );
}