import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Task = ({ name }) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text>{name}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
})
