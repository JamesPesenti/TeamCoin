import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Team Coin</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startedContainer}>
          <Text>Getting Started</Text>
          <ScrollView horizontal={true}>
            <View style={styles.goalContainer}>
              <AchievementList goals={goals} />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  startedContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  goalContainer: {
    flexDirection: 'row', // Align items horizontally
  },
});
