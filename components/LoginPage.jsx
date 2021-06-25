import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, 
  View, 
  Text, 
  TextInput, 
  Button} from 'react-native';


export default function LoginPage(props) {
  
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <View style={{marginTop:'40%', marginLeft:'10%'}}>
        <Text style={{fontWeight:'800'}}>UserName</Text>
        </View>
  
        <View style={styles.container1}>
        <TextInput
        style={{ height: 40, borderColor: 'lightblue', 
            borderWidth: 1, width:'80%', 
            borderRadius:10,fontWeight:'100', 
            paddingLeft:10}}
      />
      </View>
  
      <View style={{marginTop:10, marginLeft:'10%'}}>
        <Text style={{fontWeight:'800'}}>Password</Text>
      </View>
  
      <View style={{alignItems:'center'}}>
      <TextInput
        style={{ height: 40, borderColor: 'lightblue',
            borderWidth: 1, width:'80%', 
            borderRadius:10,marginTop:10,
            fontWeight:'100', paddingLeft:10}}
      />
      </View>
  
      <View style={{
        paddingTop:'10%',
        alignItems:'center',
        justifyContent:'bottom',
      }}>
        <Button title={'次へ'} 
          onPress={()=>{
            props.navigation.navigate('MainPage')
            }}/>
        </View>
        </View>
    );
  }

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:10,
  },
});