import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import ringData from "../../assets/data/ringData.json"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingCard = ({ radius = 100, strokeWidth = 25, progress, goal, index }) => {

   
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
       <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
        <SVG>
          {/* background */}
          <Text numberOfLines={0} style={{paddingHorizontal: 20, marginLeft: 30, fontSize: 18, marginTop: 80, letterSpacing: -.5}}>
            % of montly income spent
          </Text>
          <Circle {...circleDefaultProps} opacity={0.2} />
          {/* foreground */}
          <AnimatedCircle
            animatedProps={animatedProps}
            rotation="-90"
            {...circleDefaultProps}
          />
        </SVG>
      </View>
    </>
  )
}

export default RingCard

const styles = StyleSheet.create({})