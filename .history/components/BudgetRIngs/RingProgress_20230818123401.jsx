import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SVG, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import monthlyringData from "../../assets/data/monthlyringData.json";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({
  radius = 130,
  strokeWidth = 25,
  data = [],
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const animatedProps = data.map((item) => {
    const fill = useSharedValue(0);

    useEffect(() => {
      fill.value = withTiming(item.progress, { duration: 1500 });
    }, [item.progress]);

    return useAnimatedProps(() => ({
      strokeDasharray: [circumference * fill.value, circumference],
    }));
  });

  const startAngle = -90;

  let cumulativeProgress = 0;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ overflow: "hidden", gap: 40 }}
    >
      <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center" }}>
        <SVG>
          {/* background */}
          <Text
            numberOfLines={0}
            style={{
              color: "gray",
              alignSelf: "center",
              fontSize: 13,
              marginTop: 80,
              letterSpacing: -0.5,
            }}
          >
            August Total Spending
          </Text>
          <Circle
            r={innerRadius}
            cx={radius}
            cy={radius}
            originX={radius}
            originY={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke="#ddd" // Set a default background color
            strokeLinecap="round"
            strokeDasharray={[circumference, circumference]}
            rotation={startAngle}
          />
          {/* foreground */}
          {data.map((item, index) => {
            const animatedProp = animatedProps[index];
            const endAngle = startAngle + (360 * item.progress) / 100;
            const strokeColor = item.strokeColor || "#6ec46f"; // Default stroke color
            const strokeDasharray = [
              (circumference * cumulativeProgress) / 100,
              circumference,
            ];
            cumulativeProgress += item.progress;

            return (
              <AnimatedCircle
                key={item.id}
                cx={radius}
                cy={radius}
                r={innerRadius}
                originX={radius}
                originY={radius}
                strokeWidth={strokeWidth}
                fill="transparent"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                rotation={startAngle}
                animatedProps={animatedProp}
              />
            );
          })}
        </SVG>
      </View>
    </ScrollView>
  );
};

export default RingProgress;
