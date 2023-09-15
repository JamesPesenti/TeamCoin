import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed';
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"

const GoalCard = ({ goal, index }) => {
  return (
    <>
      <View style={styles.container}>
          <DollarSign size={29} color={"gray"} />
            <View key={index} style={styles.goalContainer}>
               <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goal.name}</Text>
               <Text style={{ fontSize: 18 }}>{goal.progress} / {goal.goalAmount} saved</Text>
               <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </>
  )
}

export default GoalCard

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    flex: 1,
    gap: 10,
    marginHorizontal: 50
  },
  goalContainer: {
    backgroundColor: "white",
    opacity: .6,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginVertical: 10,
    paddingVertical: 10,
    gap: 10
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
});
