import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get("window").width -40

const Note = ({ item, onPress }) => {
   const { title, desc } = item;

  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
         <Text numberOfLines={2}>{title}</Text>
         <Text numberOfLines={3}>{desc}</Text>
      </TouchableOpacity>
  )
}

export default Note

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      width: width / 2 -10,
      backgroundColor: "pink",
      borderRadius: 10,
      gap: 5,
      padding: 10,
      marginHorizontal: 10,
      marginBottom: 10
   }
})