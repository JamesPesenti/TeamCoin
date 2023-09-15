import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalCard = ({ goal, index }) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.card}>
         <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goal}</Text>
         <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
         <Text style={{ fontSize: 18 }}> /  saved</Text>
         <View  lightColor="green" darkColor="rgba(255,255,255,0.1)" />
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
      height: 30,
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