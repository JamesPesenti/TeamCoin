import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { setFinancialGoals, getFinancialGoals } from '../assets/data/FinanceData';


const updateGoal = () => {
 // Initialize state for user input
  const [updatedGoal, setUpdatedGoal] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState('');

  const handleGoalUpdate = async () => {
      const existingGoals = await getFinancialGoals()

      const updatedGoals = existingGoals.map((goal) => {
         if(goal.goalId === "0") {
            return {
               ...goal,
               name: updatedGoal, // update goal name
               goalAmount: updatedAmount //update goal amount
            }
         }
         return goal
      })

      // update goals in AsyncStorage
      setFinancialGoals(updatedGoals)

      // clear input fields
      setUpdatedGoal('');
      setUpdatedAmount('');
  }

  return (
    <>
      <View style={styles.container}>
         <Text style={styles.label}>Goal Name:</Text>
         <TextInput
            style={styles.input}
            value={updatedGoal}
            onChangeText={(text) => setUpdatedGoal(text)}
         />

         <Text style={styles.label}>Goal Amount:</Text>
         <TextInput
            style={styles.input}
            value={updatedAmount}
            onChangeText={(text) => setUpdatedAmount(text)}
            keyboardType="numeric"
         />

         <Pressable onPress={handleGoalUpdate}>
            <Text>Update Goal</Text>
         </Pressable>
    </View>
    </>
  )
}

export default updateGoal

const styles = StyleSheet.create({
   container: {
      margin: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 15,
      fontSize: 16,
    },
})