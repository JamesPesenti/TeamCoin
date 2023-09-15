import React from 'react';
import { StyleSheet, ScrollView, Dimensions, Text, View  } from 'react-native';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"
import Greetings from "@/components/Greetings"
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
            <Greetings />
          </View>
          <Text style={styles.overview}>Overview</Text>
          <OverviewList />
            <View style={styles.listSeparator} lightColor="gainsboro" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.savingGoals}>Saving Goals</Text>
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
  },
  overview: {
    fontSize: 18, 
    marginTop: 50, 
    paddingLeft: 10, 
    alignSelf: "flex-start"
  },
  savingGoals: {
    fontSize: 18, 
    marginTop: 50, 
    paddingLeft: 10, 
    alignSelf: "flex-start"
  },
});
