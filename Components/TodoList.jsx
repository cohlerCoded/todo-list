import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TodoList = () => {
  const [title, setTitle] = useState('Todo List')
  return (
    <View>
      <Text>{title}</Text>
      <Button title='Change Title' onPress={() => setTitle('Done')} />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})
