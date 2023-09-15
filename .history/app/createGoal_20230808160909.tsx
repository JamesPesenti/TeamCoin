import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const createGoal = () => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSaveGoal = () => {
    // Here you can implement logic to save the entered goal information.
    // For now, this example just prints the entered data to the console.
    console.log('Goal Name:', goalName);
    console.log('Target Amount:', targetAmount);
    console.log('Target Date:', targetDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Goal Name"
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
      <Button title="Save Goal" onPress={handleSaveGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default createGoal;
