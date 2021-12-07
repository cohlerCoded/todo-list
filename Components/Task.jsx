import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Task = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})
