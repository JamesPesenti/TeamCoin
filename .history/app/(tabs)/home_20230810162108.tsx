import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"
import Greeting from "@/components/Greetings"
import OverviewList from "@/components/OverviewList"
import GoalCardList from "@/components/GoalCardList"


export default function Home() {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Team Coin</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startedContainer}>
          <Greeting />
        </View>
        <Text>Overview</Text>
        <OverviewList />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <GoalCardList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 10,
    width: '100%',
  },
  startedContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  }
});
