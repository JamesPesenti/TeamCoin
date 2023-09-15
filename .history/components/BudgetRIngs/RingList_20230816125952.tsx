import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import RingCard from "../../components/BudgetRings/RingCard"
import ringData from "../../assets/data/ringData.json"


const RingList = () => {

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
     {ringData.map((ring, index) => (
       <RingCard key={index} ring={ring} />
     ))}
   </ScrollView>
 </View>
);
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingBottom: 50
   },
});

export default RingList