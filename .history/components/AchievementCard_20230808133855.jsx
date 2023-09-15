import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"

const AchievementCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View> 
         <DollarSign size={29} color={"gray"} />
         <Text>{goal.id}</Text>
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