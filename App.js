import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  Button, 
  TextInput, 
  FlatList,
  SafeAreaView,
  Pressable,
  Modal
} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [inputTask,setInputTask] = useState(' ');
  const [tasks,setTasks] = useState([]);
  const [state,setstate] = useState(false)
  const [modelVisible,setModelVisible] = useState(false);
  
  const handleDeleteTask = (itemIndex) =>{
    console.log('index',itemIndex);
    setTasks((prevTask) => prevTask.filter((item,index) => index !== itemIndex),
    );
  };

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.header}>WELCOME</Text>
      <Modal
        animationType = "slide" 
        transparent = {true} 
        visible = {modelVisible} 
        onRequestClose = { () =>{
          setModelVisible(!modelVisible);
        }}
      >
        <View style={styles.centeredView}>
        <TextInput style = {styles.textInput}
            placeholder = {'Please input task.'}
            onChangeText = {
              (Text) => {
                setInputTask(Text);
              }
            } 
            value = {inputTask}
         />
         {/* <Button title = {'Add'}
            onPress = {() => 
              {setTasks((prevTask) =>
                {
                  return [...prevTask,inputTask];
                }) ; setModelVisible(false);
              }}
         /> */}
         <Pressable 
          style={[styles.button, styles.buttonClose]}
          onPress = {() => 
            {setTasks((prevTask) =>
              {
                return [...prevTask,inputTask];
              }) ; setModelVisible(false);
            }}
        >
            <Text style={styles.textStyle}>Add</Text>  
         </Pressable>
        
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModelVisible(!modelVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModelVisible(true)}
      >
        <Text style={styles.textStyle}>Add Task</Text>
      </Pressable>

    {/* List */}
    <FlatList
        style={styles.list}
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem
            title={item}
            onDeleteTask={handleDeleteTask}
            index={index}
          />
        )}
      />
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Button 
    //     title={"Add"} 
    //     onPress={() => {
    //       // const newstasks = [...tasks, inputTask];
    //       setTasks((prevTask) => [...prevTask,tasks]);
    //       // setTasks(newstasks);
    //     }}
    //     />

    //   <TextInput 
    //     style={styles.textInput} 
    //     placeholder={'Add Task'}
    //     onChangeText={ (text) => {
    //       setInputTask(text);
    //       }} 
    //     value={inputTask}
    //     />

    //     <FlatList 
    //       keyExtractor = {(_item, index) => index}
    //       data = {tasks}
    //       renderItem = {(itemData) => <TaskItem>{itemData.item}</TaskItem>}
    //     />

    // </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#34548e',
    alignItems: 'center',
  },
  textInput:{
    width:'80%',
    borderWidth:1,
    borderColor:'#35bac6',
    padding:10,
    borderRadius:20,
  },
  list: {flex:1 , width:'80%' , marginTop:24},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 15,
    padding: 15,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#1a315b",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  header:{
    fontWeight :"bold",
    textAlign:"center",
    fontSize : 40
  }
});


