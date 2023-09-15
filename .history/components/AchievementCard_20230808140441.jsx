import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"

const AchievementCard = () => {
  return (
    <>
      <View style={styles.container}>
        {goals.map((goalItem) => (
         <>
         <DollarSign size={29} color={"gray"} />
         <View key={goalItem.id} style={styles.goalContainer}>
               <View style={{flexDirection: "column"}}>
                  <Text style={{ fontSize: 40 }}>{goalItem.id}</Text>
                  <Text style={{ fontSize: 40 }}>{goalItem.name}</Text>
               </View>
          </View>
         </>
        ))}
      </View>
    </>
  )
}

export default AchievementCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Align items horizontally
  },
  goalContainer: {
   
    alignItems: 'center', // Center vertically
  },
});