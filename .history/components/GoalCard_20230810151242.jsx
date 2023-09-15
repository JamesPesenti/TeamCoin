import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalCard = ({ goal, index }) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.card}>
         <Text>{goal}</Text>
      </View>
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
    goalContainer: {
      backgroundColor: "white",
      opacity: .6,
      flexDirection: 'column', // Align items horizontally
      alignItems: 'flex-start', // Center vertically,
      marginVertical: 10,
      paddingVertical: 10,
    },
    progressBar: {
      marginVertical: 10,
      height: 10,
      width: '80%',
      borderRadius: 15,
    },
    separator: {
      marginVertical: 20,
      height: 1,
      width: '100%',
      borderRadius: 10,
    },
})