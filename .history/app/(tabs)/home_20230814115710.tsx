import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"
import Greeting from "@/components/Greetings"
import OverviewList from "@/components/OverviewList"
import GoalCardList from "@/components/GoalCardList"
import { Coins } from 'lucide-react-native';


export default function Home() {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Team <Coins color={"gray"} /></Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <View style={styles.startedContainer}>
            <Greeting />
          </View>
          <Text style={{marginTop: 50, alignSelf: "flex-start"}}>Overview</Text>
          <OverviewList />
            <View style={styles.listSeparator} lightColor="gainsboro" darkColor="rgba(255,255,255,0.1)" />
            <Text>Saving Goals</Text>
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
    height: 1,
    width: '80%',
  },
  listSeparator: {
    marginVertical: 30,
    height: 5,
    width: '100%',
  },
  startedContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    alignSelf: "flex-start"
  }
});
