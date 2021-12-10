import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from 'react-native'
import Task from './Task'

const TodoList = () => {
  const [title, setTitle] = useState('Todo List')
  const [text, setText] = useState('')
  const [taskList, setTaskList] = useState([
    // <Task name='Clean' key={0} />,
    // <Task name='Cook' key={1} />,
    // <Task name='Code' key={2} />,
  ])

  const deleteTask = (key) => {
    setTaskList(taskList.filter((task, i) => i !== key))
  }

  const addTask = () => {
    const key = taskList.length
    setTaskList([
      ...taskList,
      <Task name={text} key={key} deleteTask={deleteTask} />,
    ])
    setText('')
  }

  return (
    <View style={{ width: '80%', marginBottom: 10 }}>
      <Text style={[styles.textSize, styles.textAlign]}>{title}</Text>
      <View>
        <ScrollView style={{ height: '50%', marginBottom: 20 }}>
          {taskList}
        </ScrollView>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button title='Add Task' onPress={addTask} />
      </View>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  textSize: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textAlign: {
    alignSelf: 'center',
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
})
