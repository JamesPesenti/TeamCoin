import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Dropdown from 'react-native-input-select';


export default function Budget() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Breakdown</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Budget Graph */}
      {/* Budgeting ideas dropdown */}
      <Dropdown  
         label="Budgeting Ideas"
         placeholder="Choose a category"
         options={[
            { label: 'Get rid of cable', value: 'NG' },
            { label: 'Emergency Fund', value: 'AX' },
            { label: 'Vacation', value: 'DZ' },
            { label: 'Car Repairs', value: 'AS' },
            { label: 'Down Payment', value: 'AD' },
            { label: 'Wedding', value: 'NG' },
         ]}
        //  selectedValue={goal}
        //  onValueChange={(value) => setGoal(value)}
         // primaryColor={'green'}
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
