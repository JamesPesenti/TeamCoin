import { useEffect } from "react"
import { StyleSheet, FlatList, Text, View, ScrollView, Dimensions } from 'react-native'
import RingCard from "../BudgetRings/RingCard"
import ringData from "../../assets/data/ringData.json"
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import SVG, { Circle, CircleProps } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingList = ({ radius = 100, strokeWidth = 25, ring, ringData }) => {

  const width = Dimensions.get("window").width

  return (
   <View style={styles.container}>
      <FlatList
         horizontal
         contentContainerStyle={{overflow: "hidden", gap: 40, paddingBottom: 20, paddingHorizontal: 10}}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.id.toString()}
         snapToInterval={width - 120}
         snapToAlignment={"center"}
         decelerationRate={"fast"}
         itemVisiblePercentThreshold={20}
         data={ringData}
         renderItem={({ item, index }) => {
            <RingCard 
               key={ring.id}
               radius={90}
               strokeWidth={strokeWidth}
               progress={ring.progress}
               ring={ring}
               index={index}
            />
         }} 
      />
       
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