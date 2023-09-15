import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"

const screenWidth = Dimensions.get('window').width;

function getTimeOfDay() {
  var today = new Date()
  var curHr = today.getHours()
}

if (curHr < 4) {
  return "night"
} else if () {
  return "morning"
} else if () {
  return "afternoon"
} else {
  return "night"
}

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Team Coin</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startedContainer}>
          <Text>Greeting {getTimeOfDay}</Text>
       
        </View>
        <ScrollView horizontal={true}>
            <AchievementList goals={goals} />
          </ScrollView>
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
