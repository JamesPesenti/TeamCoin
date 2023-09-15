import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementList = ({ goals }) => {
  return (
    <View style={styles.container}>
      {goals.map((goal, index) => (
        <View key={index} style={styles.achievement}>
          <Text>{goal.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Set the flexDirection to 'row' for horizontal rendering
  },
  achievement: {
    width: 150, // Adjust the width as needed
    height: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default AchievementList;
