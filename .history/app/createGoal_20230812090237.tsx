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
      <View style={styles.buttonContainer}>
        <Pressable 
            style={styles.button}
            onPress={() => console.warn("Works")}
        >
          <Text style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Save Goal</Text>
        </Pressable>
      </View>
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
  buttonContainer: {
    marginVertical: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center'
   },
   button: {
    marginTop: "auto", 
    marginBottom: "auto", 
    backgroundColor: "blue",
    width: 200, 
    height: 50, 
    padding: 15, 
    borderRadius: 5
   }
});

export default createGoal;
