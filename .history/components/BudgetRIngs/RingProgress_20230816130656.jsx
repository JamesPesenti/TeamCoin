import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({ radius = 100, strokeWidth = 25, progress }) => {

  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  // Animation speed
  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }), []);

  const circleDefaultProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    strokeWidth: strokeWidth,
    fill: "transparent",
    stroke: "#58af84",
    strokeLinecap: "line",
  };

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