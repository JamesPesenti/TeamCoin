import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react';
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json";

const AchievementList = () => {
  return (
    <ScrollView
      horizontal // Set the ScrollView to horizontal mode
      contentContainerStyle={styles.container} // Apply styles to the ScrollView
    >
      {goals.map((goalItem) => (
        <View key={goalItem.id} style={styles.goalContainer}>
          <DollarSign size={29} color={"gray"} />
          <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goalItem.name}</Text>
          <Text style={{ fontSize: 18 }}>{goalItem.progress} / {goalItem.goalAmount} saved</Text>
          <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
      ))}
    </ScrollView>
  );
}

export default AchievementList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange goals horizontally
    padding: 10, // Add some padding to separate goals
  },
  goalContainer: {
    backgroundColor: "white",
    marginRight: 10, // Add some margin to separate goals
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
