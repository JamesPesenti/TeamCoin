import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import monthlyringData from "../../assets/data/monthlyringData.json"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({ radius = 130, strokeWidth = 25, progress, index, monthly }) => {

  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  // Animation speed
  useEffect(() => {
    fill.value = withTiming(monthly.progress, { duration: 1500 });
  }, [monthly.progress]);

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
    stroke: monthly.strokeColor,
    strokeLinecap: "line",
  };

  return (
   <>
    <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{overflow: "hidden", gap: 40}}
    >
      <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
        <SVG>
          {/* background */}
          <Text numberOfLines={0} style={{color: "gray", alignSelf: "center", fontSize: 13, marginTop: 80, letterSpacing: -.5}}>
            August Total Spending
          </Text>
          <Circle {...circleDefaultProps} opacity={0.4} />
          {/* foreground */}
          <AnimatedCircle
            animatedProps={animatedProps}
            rotation="-90"
            {...circleDefaultProps}
          />
        </SVG>
      </View>
    </ScrollView>
   </>
  );
};

export default RingProgress;