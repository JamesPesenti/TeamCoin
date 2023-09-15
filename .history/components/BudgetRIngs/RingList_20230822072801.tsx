import { useEffect } from "react"
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import RingCard from "../BudgetRings/RingCard"
import ringData from "../../assets/data/ringData.json"
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import SVG, { Circle, CircleProps } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingList = ({ radius = 100, strokeWidth = 25, ring, ringData }) => {

  const width = Dimensions.get("window").width



  return (
   <View style={styles.container}>
      <ScrollView 
         horizontal
         contentContainerStyle={{overflow: "hidden", gap: 40, paddingBottom: 0, paddingHorizontal: 10}}
         showsHorizontalScrollIndicator={false}
         snapToInterval={width - 120}
         snapToAlignment={"center"}
         decelerationRate={"fast"}
         itemVisiblePercentThreshold={20}
      >
     {ringData.map((ring, index) => (
        <RingCard 
          key={ring.id}
          radius={radius}
          strokeWidth={strokeWidth}
          progress={ring.progress}
          ring={ring}
          index={index}
        />
      //    <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
      //    <SVG>
      //      {/* background */}
      //      <Text numberOfLines={0} 
      //       style={{fontSize: 16, marginTop: 80, paddingHorizontal: 50, justifyContent: "center", alignSelf: "center", alignItems: "center",}}>
      //        {ring.type}
      //      </Text>
      //      <Circle {...circleDefaultProps} opacity={0.2} />
      //      {/* foreground */}
      //      <AnimatedCircle
      //        animatedProps={animatedProps}
      //        rotation="-90"
      //        {...circleDefaultProps}
      //      />
      //    </SVG>
      //  </View>
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