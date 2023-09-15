import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

const createGoal = () => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSaveGoal = () => {
    // Here you can implement logic to save the entered goal information.
    // For now, this example just prints the entered data to the console.
    console.log('Goal Name:', goalName);
    console.log('Goal Amount:', targetAmount);
    console.log('Target Date:', targetDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="What are you saving for?"
        value={goalName}
        onChangeText={text => setGoalName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Target Amount"
        value={targetAmount}
        onChangeText={text => setTargetAmount(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Target Date"
        value={targetDate}
        onChangeText={text => setTargetDate(text)}
      />
      <Pressable 
         style={{opacity: .5, backgroundColor: "green", marginHorizontal: 50, width: 100, height: 50}}
         onPress={handleSaveGoal}
      >
       <Text style={{opacity: 1, textAlign: "center", alignSelf: "center", alignItems: "center", padding: 15}}>Save Goal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white"
  },
  label: {
    color: "black",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    color: "gray",
    marginBottom: 16,
    padding: 8,
    borderColor: 'gray',
    borderWidth: .2,
    borderRadius: 2,
  },
});

export default createGoal;
