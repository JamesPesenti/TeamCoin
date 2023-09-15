import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementCard from "@/components/AchievementCard"

export default function Savings() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Savings</Text>
      </View>
      <View style={styles.contentContainer}>
        <AchievementCard />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection: 'row', // Set flexDirection to row
    alignItems: 'flex-start', // Align items to the top
  },
  titleContainer: {
    width: '20%', // Adjust the width as needed
    justifyContent: 'center', // Center the title vertically
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
