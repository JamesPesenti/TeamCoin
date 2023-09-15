import { StyleSheet, Text, View, ScrollView } from 'react-native'
import GoalCard from "../components/GoalCard"

const financialGoals = [
   "Retirement",
   "Education Fund",
   "Travel",
   "Date Night",
   "Buying Home",
   "Buying Car",
   "Emergency Fund"
]

const GoalCardList = () => {
  return (
   <View style={styles.container}>
   <ScrollView horizontal>
     {financialGoals.map((goal, index) => (
       <GoalCard key={index} goal={goal} />
     ))}
   </ScrollView>
 </View>
);
};

const styles = StyleSheet.create({
   container: {
   flex: 1,
   },
});

export default GoalCardList