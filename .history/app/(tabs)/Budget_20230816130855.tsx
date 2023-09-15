import { useState } from "react"
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import Dropdown from 'react-native-input-select';
import RingList from "../../components/BudgetRings/RingList"
import RingProgress from "../../components/RingProgress"


export default function Budget() {

  const [goal, setGoal] = useState('')

  return (
   <>
     <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Budget Breakdown</Text>
        <View style={styles.separator} lightColor="black" darkColor="rgba(255,255,255,0.1)" />
        {/* Budget Graph */}
        <RingList strokeWidth={25} progress={0.35} />
        <RingProgress strokeWidth={25} progress={0.35} />

        {/* Budgeting ideas dropdown */}
        <View style={{marginHorizontal: 50}}>
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
              paddingHorizontal: 66,
              borderWidth: 1, // To remove border, set borderWidth to 0
          }}
          placeholderStyle={{
              color: 'gray',
              fontSize: 15,
              fontWeight: '500'
          }}
          labelStyle={{ alignSelf: 'flex-start', color: 'gray', fontSize: 15, fontWeight: '500' }}
          dropdownHelperTextStyle={{
              color: 'green',
              fontWeight: '900',
          }}
        />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
     </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 0,
    paddingRight: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 10,
    width: '80%',
  },
  buttonContainer: {
    marginVertical: 40, 
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
   },
});
