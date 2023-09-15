import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalCard = ({ goal }) => {
  return (
    <View style={styles.card}>
      <Text>{goal}</Text>
    </View>
  )
}

export default GoalCard

const styles = StyleSheet.create({
   card: {
      backgroundColor: "white",
      opacity: .6,
      flexDirection: 'column', // Align items horizontally
      alignItems: 'flex-start', // Center vertically,
      marginVertical: 10,
      paddingVertical: 10,
    },
})