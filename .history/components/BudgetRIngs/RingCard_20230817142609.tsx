import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import ringData from "../../assets/data/ringData.json"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingCard = ({ radius = 100, strokeWidth = 25, progress, ring, index }) => {
   
   const innerRadius = radius - strokeWidth / 2;
   const circumference = 2 * Math.PI * innerRadius;

   const fill = useSharedValue(0);

   // Animation speed
   useEffect(() => {
      fill.value = withTiming(ring.progress, { duration: 1500 });
   }, [ring.progress]);

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
      stroke: ring.strokeColor,
      strokeLinecap: "line",
   };


  return (
    <>
       <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
        <SVG>
          {/* background */}
          <Text numberOfLines={0} style={{paddingHorizontal: 20, marginLeft: 30, fontSize: 18, marginTop: 80, letterSpacing: -.5}}>
            {ring.type}
          </Text>
          <Text numberOfLines={0} style={{color: ring.strokeColor, opacity: .8, alignSelf: "center", fontSize: 18, marginTop: 0, letterSpacing: -.5}}>
            {ring.amount}
          </Text>
          <Circle {...circleDefaultProps} opacity={0.2} />
          {/* foreground */}
          <AnimatedCircle
            animatedProps={animatedProps}
            rotation="-90"
            {...circleDefaultProps}
          />
           <View style={{alignItems: "center", marginTop: 50}}>
              <Text>Goal: </Text>
           </View>
        </SVG>
      </View>
    </>
  )
}

export default RingCard

const styles = StyleSheet.create({})