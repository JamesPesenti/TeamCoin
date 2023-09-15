import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  return (
    <ScrollView horizontal={true}>
      <View style={[styles.container, { width: screenWidth * 2 }]}>
        <Text style={styles.title}>Team Coin</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startedContainer}>
          <Text>Getting Started</Text>
          <AchievementList goals={goals} />
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
  }
});
