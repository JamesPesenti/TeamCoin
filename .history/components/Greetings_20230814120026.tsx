import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


function getTimeOfDay() {
   var today = new Date()
   var curHr = today.getHours()
 
   if (curHr < 4) {
     return "Night"
   } else if (curHr < 12) {
     return "Morning"
   } else if (curHr < 18) {
     return "Afternoon"
   } else {
     return "Night"
   }
 }

const Greetings = () => {
  return (
    <View>
      <Text style={styles.greeting}>Good {getTimeOfDay()}, Elsy!</Text>
    </View>
  )
}

export default Greetings

const styles = StyleSheet.create({
   greeting: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "left"
    }
})