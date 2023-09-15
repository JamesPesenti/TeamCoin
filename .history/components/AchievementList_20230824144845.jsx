import { StyleSheet, ScrollView } from 'react-native'
import { Text, View } from '@/components/Themed';
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"

const AchievementList = () => {
  return (
    <>
     <ScrollView horizontal>
      <View style={styles.container}>
          {goals.map((goalItem) => (
            <>
            <DollarSign size={29} color={"gray"} />
              <View key={goalItem.id} style={styles.goalContainer}>
                <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goalItem.name}</Text>
                <Text style={{ fontSize: 18 }}>{goalItem.progress} / {goalItem.goalAmount} saved</Text>
                <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
              </View>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </>
          ))}
        </View>
     </ScrollView>
    </>
  )
}

export default AchievementList

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    flex: 1,
  },
  goalContainer: {
    backgroundColor: "white",
   //  opacity: .6,
   //  flexDirection: 'row', // Align items horizontally
   //  alignItems: 'flex-start', // Center vertically,
   //  marginVertical: 10,
   //  paddingVertical: 10,
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
