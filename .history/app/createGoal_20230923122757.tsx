// import { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
// import { useRouter } from 'expo-router';
// import { ArrowBigLeft } from 'lucide-react-native';
// // import { setFinancialGoals, getFinancialGoals } from '../assets/data/FinanceData';

// const createGoal = () => {
//   const [goalName, setGoalName] = useState('');
//   const [targetAmount, setTargetAmount] = useState('');
//   const [targetDate, setTargetDate] = useState('');

//   const handleSaveGoal = () => {
//     // Here you can implement logic to save the entered goal information.
//     // For now, this example just prints the entered data to the console.
//     console.log('Goal Name:', goalName);
//     console.log('Goal Amount:', targetAmount);
//     console.log('Target Date:', targetDate);
//   };

//   const router = useRouter()

//   const backButton = () => (
//     <Pressable onPress={() => router.push("/")}>
//       <ArrowBigLeft size={24} color={"black"} />
//     </Pressable>
//   )

//   return (
//    <>
//       <View>
//       {backButton()}
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.label}>Create Goal</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="What are you saving for?"
//           value={goalName}
//           onChangeText={text => setGoalName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Target Amount"
//           value={targetAmount}
//           onChangeText={text => setTargetAmount(text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Target Date"
//           value={targetDate}
//           onChangeText={text => setTargetDate(text)}
//         />
//         {goalName.trim().length >= 3 ? (
//           <View style={styles.buttonContainer}>
//             <Pressable 
//                 style={styles.button}
//                 onPress={() => console.warn("Works")}
//             >
//               <Text style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Save Goal</Text>
//             </Pressable>
//           </View>
//         ) : null}
//       </View>
//    </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "white",
//     paddingVertical: 80
//   },
//   label: {
//     color: "black",
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     color: "gray",
//     marginBottom: 16,
//     padding: 8,
//     borderColor: 'gray',
//     borderWidth: .2,
//     borderRadius: 2,
//   },
//   buttonContainer: {
//     marginVertical: 50, 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     alignSelf: 'center'
//    },
//    button: {
//     marginTop: "auto", 
//     marginBottom: "auto", 
//     backgroundColor: "#58af84",
//     width: 200, 
//     height: 50, 
//     padding: 15, 
//     borderRadius: 5
//    }
// });

// export default createGoal;






import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowBigLeft } from 'lucide-react-native';

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

  const router = useRouter();

  const backButton = () => (
    <Pressable onPress={() => router.push("/")}>
      <ArrowBigLeft size={24} color={"black"} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {backButton()}
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
      {goalName.trim().length >= 3 ? (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={handleSaveGoal}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Save Goal</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    paddingVertical: 80,
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
    borderWidth: 0.2,
    borderRadius: 2,
  },
  buttonContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#58af84",
    width: 200,
    height: 50,
    padding: 15,
    borderRadius: 5,
  },
});

export default createGoal;

