import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Task = ({ name, key, deleteTask }) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text>{name}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          marginHorizontal: 20,
        }}
        onPress={() => {
          deleteTask(key)
        }}
      >
        <FontAwesome name='trash' size={24} color='black' />
      </TouchableOpacity>
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
