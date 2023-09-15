import React from "react";
import { View, StyleSheet } from "react-native";
import { Path, Svg } from "react-native-svg";
import monthlyringData from "../../assets/data/monthlyringData.json";

const CircleGraph = () => {
  const radius = 100;
  const strokeWidth = 25;
  const center = radius + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  let startAngle = -Math.PI / 2; // Starting from the top

  return (
    <View style={styles.container}>
      <Svg width={2 * center} height={2 * center}>
        {monthlyringData.map((item) => {
          const progressAngle = (item.progress * Math.PI * 2) / 100;
          const endAngle = startAngle + progressAngle;
          const largeArcFlag = progressAngle <= Math.PI ? "0" : "1";

          const startX = center + radius * Math.cos(startAngle);
          const startY = center + radius * Math.sin(startAngle);

          const endX = center + radius * Math.cos(endAngle);
          const endY = center + radius * Math.sin(endAngle);

          const pathData = `
            M ${center} ${center}
            L ${startX} ${startY}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
            Z
          `;

          startAngle = endAngle; // Update the start angle for the next segment

          return (
            <Path
              key={item.id}
              d={pathData}
              fill={item.strokeColor}
              stroke="transparent"
              strokeWidth={0}
            />
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircleGraph;
