import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

export default function NoticeDetail(props) {
  //
  return (
    <SafeAreaView>
        <Text>标题:{props.route.params.id}</Text>
        <Text>Notice Detail</Text>
        <Image source={require('../assets/test.jpg')}/>
    </SafeAreaView>
  );
}