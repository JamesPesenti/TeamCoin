import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import GoalCard from "../components/GoalCard"
import ringData from "../assets/data/ringData.json"


const RingList = () => {

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
     {ringData.map((ring, index) => (
       <GoalCard key={index} ring={ring} />
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

export default RingList