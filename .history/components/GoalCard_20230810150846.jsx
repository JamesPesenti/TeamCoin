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
      width: 200,
      height: 150,
      backgroundColor: 'white',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
})