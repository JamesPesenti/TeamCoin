import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import RingList from "../BudgetRings/RingList"

const RingProgress = () => {

  return (
   <>
    <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{overflow: "hidden", gap: 40}}
    >
      <RingList /> 
    </ScrollView>
   </>
  );
};

export default RingProgress;