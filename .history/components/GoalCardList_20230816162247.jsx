import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import GoalCard from "../components/GoalCard"
import goals from "../assets/data/goals.json"


const GoalCardList = () => {

   const width = Dimensions.get("window").width

  return (
   <View style={styles.container}>
      <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
         snapToInterval={width - 120}
         snapToAlignment={"center"}
         decelerationRate={"fast"}
         itemVisiblePercentThreshold={20}
      >
     {goals.map((goal, index) => (
       <Link href="/">
         <Pressable>
            <GoalCard goal={goal} index={index}/>
         </Pressable>
       </Link>
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