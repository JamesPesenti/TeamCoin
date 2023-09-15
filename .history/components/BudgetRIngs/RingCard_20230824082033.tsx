import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import ringData from "../../assets/data/ringData.json"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingCard = ({ radius = 50, strokeWidth = 25, progress, ring, index }) => {
   
   const innerRadius = radius - strokeWidth / 2;
   const circumference = 2 * Math.PI * innerRadius;

   const fill = useSharedValue(0);

   // Animation speed
   useEffect(() => {
      fill.value = withTiming(ring.progress, { duration: 1800 });
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
       <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center", marginVertical: 30}}>
        <SVG>
          {/* background */}
          <Text numberOfLines={0} style={styles.ringType}>
            {ring.type}
          </Text>
          <Text numberOfLines={0} style={styles.ringAmount}>
            {ring.amount}
          </Text>
          <Circle {...circleDefaultProps} opacity={0.2} />
          {/* foreground */}
          <AnimatedCircle
            animatedProps={animatedProps}
            rotation="-90"
            {...circleDefaultProps}
          />
        </SVG>
        <View style={styles.goalContainer}>
            <Text style={{color: "gray", fontSize: 17, fontWeight: "bold"}}>Goal: <Text style={{color: ring.strokeColor, fontWeight: "400"}}>{ring.goalAmount}</Text></Text>
        </View>
      </View>
    </>
  )
}

export default RingCard

const styles = StyleSheet.create({
  ringType: {
    paddingHorizontal: 10, 
    marginLeft: 35, 
    fontSize: 16, 
    marginTop: 65, 
    letterSpacing: -.5
  },
  ringAmount: {
    color: ring.strokeColor, 
    opacity: .8, 
    alignSelf: "center", 
    fontSize: 18, 
    marginTop: 0, 
    letterSpacing: -.5
  },
  goalContainer: {
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 20
  },
  
})