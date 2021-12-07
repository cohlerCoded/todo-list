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
  return (
    <View style={{ width: '80%', marginBottom: 60 }}>
      <Text style={[styles.textSize, styles.textAlign]}>{title}</Text>
      <ScrollView style={{ marginBottom: 60 }}>
        <Task name='Clean' />
        <Task name='Cook' />
        <Task name='Code' />
      </ScrollView>
      <View>
        <TextInput style={styles.textInput} />
        <Button title='Change Title' onPress={() => setTitle('Done')} />
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
