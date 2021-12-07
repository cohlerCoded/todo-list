import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Task from './Task'

const TodoList = () => {
  const [title, setTitle] = useState('Todo List')
  return (
    <View style={{ width: '80%', marginBottom: 60 }}>
      <Text style={[styles.textSize, styles.textAlign]}>{title}</Text>
      <Task name='Clean' />
      <Task name='Cook' />
      <Task name='Code' />
      <Button title='Change Title' onPress={() => setTitle('Done')} />
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
})
