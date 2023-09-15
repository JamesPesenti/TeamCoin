import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed';
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
               <Text style={{ opacity: 1, fontSize: 20, marginBottom: 5 }}>{goalItem.name}</Text>
               <Text style={{ fontSize: 18 }}>{goalItem.progress} / {goalItem.goalAmount} saved</Text>
               <View style={styles.separator} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
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
    backgroundColor: "green",
    flex: 1,
  },
  goalContainer: {
    backgroundColor: "green",
    opacity: .3,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginVertical: 10,
    paddingVertical: 10,
  },
  separator: {
    marginVertical: 10,
    height: 10,
    width: '100%',
    borderRadius: 15
  },
});
