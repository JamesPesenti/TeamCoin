import { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import Dropdown from 'react-native-input-select';
import RingProgress from "../../components/RingProgress"


export default function Budget() {

  const [goal, setGoal] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Breakdown</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Budget Graph */}
      <RingProgress strokeWidth={30} progress={0.7} />
      {/* Budgeting ideas dropdown */}
      <Dropdown  
         label="Budgeting Ideas"
         placeholder="Choose a category"
         options={[
            { label: 'Get rid of cable', value: 'NG' },
            { label: 'Eat out once a week', value: 'AX' },
            { label: 'Car pool to work', value: 'DZ' },
            { label: 'Shop at Aldi', value: 'AS' },
            { label: 'No pets', value: 'AD' },
            { label: 'Reduce shopping for clothes', value: 'NG' },
            { label: '1 Bed for single person, not a 2Bdrm', value: 'NG' },
            { label: 'Make coffee at home', value: 'NG' },
         ]}
         selectedValue={goal}
         onValueChange={(value) => setGoal(value)}
         // primaryColor={'green'}
         primaryColor={'teal'}
         dropdownStyle={{
            paddingHorizontal: 50,
            borderWidth: 1, // To remove border, set borderWidth to 0
         }}
         placeholderStyle={{
            color: 'gray',
            fontSize: 15,
            fontWeight: '500'
         }}
         labelStyle={{ color: 'gray', fontSize: 15, fontWeight: '500' }}
         dropdownHelperTextStyle={{
            color: 'green',
            fontWeight: '900',
         }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 8
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
});
