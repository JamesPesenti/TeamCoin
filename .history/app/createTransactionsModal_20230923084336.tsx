import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from "react"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Dropdown from 'react-native-input-select';

export default function CreateTransactions() {

   const [amount, setAmount] = useState("")
   const [goal, setGoal] = useState("")
   const [saveGoal, setSaveGoal] = useState()

   const [dropdown, setDropdown] = useState()

   const handleOnChangeDropdown = text => {
      setDropdown(text)
   }

  return (
    <View style={styles.container}>
     <View style={styles.addGoal}>
      <Text style={styles.title}>Add Goal</Text>
     </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Text style={{color: "gray", fontSize: 16, marginVertical: 10}}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Dropdown  
         value={dropdown}
         onChangeText={handleOnChangeDropdown}
         label="Goal"
         placeholder="Select an option..."
         options={[
            { label: 'Dinner', value: 'NG' },
            { label: 'Emergency Fund', value: 'AX' },
            { label: 'Vacation', value: 'DZ' },
            { label: 'Car Repairs', value: 'AS' },
            { label: 'Down Payment', value: 'AD' },
            { label: 'Wedding', value: 'NG' },
         ]}
         selectedValue={goal}
         onValueChange={(value) => setGoal(value)}
         primaryColor={'teal'}
         dropdownStyle={{
            paddingHorizontal: 50,
            borderWidth: 1, // To remove border, set borderWidth to 0
         }}
         placeholderStyle={{
            color: 'gray',
            fontSize: 15,
            fontWeight: '500',
         }}
         labelStyle={{ marginVertical: 10, color: 'gray', fontSize: 16, fontWeight: '500' }}
         dropdownHelperTextStyle={{
            color: 'green',
            fontWeight: '900',
         }}
      />
      <View style={styles.buttonContainer}>
         <Pressable
            style={styles.button}
         >
            <Text style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Create Goal</Text>
         </Pressable>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 8
  },
  addGoal: {
   marginVertical: 50, 
   justifyContent: 'center', 
   alignItems: 'center', 
   alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 0
  },
  input: {
   marginLeft: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
   backgroundColor: "black", 
   width: 200, 
   height: 50, 
   padding: 15, 
   borderRadius: 5
  }
});
