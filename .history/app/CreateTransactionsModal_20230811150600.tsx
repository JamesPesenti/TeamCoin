import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { useState } from "react"

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Dropdown from 'react-native-input-select';

export default function CreateTransactions() {

   const [amount, setAmount] = useState("")
   const [goal, setGoal] = useState("")

   const [country, setCountry] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add transaction</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Dropdown  
         label="Goal"
         placeholder="Select an option..."
         options={[
            { label: 'Nigeria', value: 'NG' },
            { label: 'Åland Islands', value: 'AX' },
            { label: 'Algeria', value: 'DZ' },
            { label: 'American Samoa', value: 'AS' },
            { label: 'Andorra', value: 'AD' },
            { label: 'Nigeria', value: 'NG' },
            { label: 'Åland Islands', value: 'AX' },
            { label: 'Algeria', value: 'DZ' },
            { label: 'American Samoa', value: 'AS' },
            { label: 'Andorra', value: 'AD' },
         ]}
         selectedValue={country}
         onValueChange={(value) => setCountry(value)}
         primaryColor={'green'}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
