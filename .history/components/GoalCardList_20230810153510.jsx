import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import GoalCard from "../components/GoalCard"
import goals from "../assets/data/goals.json"

// const financialGoals = [
//    "Retirement",
//    "Education Fund",
//    "Travel",
//    "Date Night",
//    "Buying Home",
//    "Buying Car",
//    "Emergency Fund"
// ]


const GoalCardList = () => {

   const width = Dimensions.get("window").width

  return (
   <View style={styles.container}>
   <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 120}
      snapToAlignment={"center"}
      decelerationRate={"normal"}
      itemVisiblePercentThreshold={20}
   >
     {goals.map((goal, index) => (
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