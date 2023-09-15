import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import data from "../assets/data"

const AchievementCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View> 
        
         <Text>{data.goal}</Text>
        </View>
      </View>
    </>
  )
}

export default AchievementCard

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   content: {
      alignItems: "left"
   }
})