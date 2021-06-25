import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

//dummy data
const list = [
  {
    id: 1,
    title: 'Repeort１',
    image: '../assets/test.jpg',
  },
  {
    id: 2,
    title: 'Repeort２',
    image: '../assets/test.jpg',
  },
  {
    id: 3,
    title: 'Repeort３',
    image: '../assets/test.jpg',
  },
  {
    id: 4,
    title: 'Repeort４',
    image: '../assets/test.jpg',
  },
  {
    id: 5,
    title: 'Repeort５',
    image: '../assets/test.jpg',
  },
  {
    id: 6,
    title: 'Repeort６',
    image: '../assets/test.jpg',
  },
  {
    id: 7,
    title: 'Repeort７',
    image: '../assets/test.jpg',
  },
  {
    id: 8,
    title: 'Repeort８',
    image: '../assets/test.jpg',
  },
];

export default function NextPage(props) {
  //
  return (
    <SafeAreaView>
      <ScrollView>
      {list.map((item, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() =>
              props.navigation.navigate('NoticeDetail', { id: item.id })
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Avatar source={{ uri: item.image }} />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});