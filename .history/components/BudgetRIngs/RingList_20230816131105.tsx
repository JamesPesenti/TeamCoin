import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import RingCard from "../../components/BudgetRings/RingCard"
import ringData from "../../assets/data/ringData.json"


const RingList = ({ radius = 100, strokeWidth = 25, progress }) => {

   const width = Dimensions.get("window").width

  return (
   <View style={styles.container}>
      <ScrollView 
         horizontal
         contentContainerStyle={{overflow: "hidden", gap: 40}}
         showsHorizontalScrollIndicator={false}
         snapToInterval={width - 120}
         snapToAlignment={"center"}
         decelerationRate={"fast"}
         itemVisiblePercentThreshold={20}
      >
     {ringData.map((ring, index, progress) => (
       <RingCard progress={progress} key={index} ring={ring} />
     ))}
   </ScrollView>
 </View>
);
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingBottom: 40
   },
});

export default RingList