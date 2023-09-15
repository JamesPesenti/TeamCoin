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
               <Text style={{ fontSize: 20 }}>{goalItem.name}</Text>
               <Text style={{ fontSize: 18 }}>{goalItem.progress}</Text>
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
  },
  goalContainer: {
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginVertical: 10,
    paddingVertical: 10
  },
});
