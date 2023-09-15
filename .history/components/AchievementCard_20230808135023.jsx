import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"


const AchievementCard = () => {
  return (
    <>
      <View style={styles.container}>
         <DollarSign size={29} color={"gray"} />
         {goals.map((goalItem) => (
            <View key={goalItem.id} style={styles.goalContainer}>
               <Text style={{fontSize: 10}}>{goalItem.id}</Text>
            </View>
         ))}
      </View>
    </>
  )
}

export default AchievementCard

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   goalContainer: {
      flexDirection: "row",
  
   }
})