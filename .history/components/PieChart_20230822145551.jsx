import React from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Circle, Path } from 'react-native-svg';
import spendingData from "../assets/data/spendingData.json"


const PieChart = () => {
  const width = 300;
  const height = 220;
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius * 0.7;
  const strokeWidth = 10;
  const cx = width / 2.6;
  const cy = height / 2;

  const total = spendingData.reduce((sum, d) => sum + d.value, 0);

  let startAngle = 0;
  let endAngle = 0;

  return (
    <View style={{right: 27}}>
      <Svg width={width} height={height}>
        <Text style={styles.totalSpending}>Total Spending</Text>
        <G transform={`translate(${cx}, ${cy})`}>
          {spendingData.map((d, index) => {
            endAngle = startAngle + (d.value / total) * 2 * Math.PI;
            const x1 = radius * Math.cos(startAngle);
            const y1 = radius * Math.sin(startAngle);
            const x2 = radius * Math.cos(endAngle);
            const y2 = radius * Math.sin(endAngle);

            const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${
              endAngle - startAngle > Math.PI ? 1 : 0
            } 1 ${x2} ${y2} L 0 0 Z`;

            startAngle = endAngle;

            return (
              <Path 
                key={index} 
                d={path} 
                fill={d.color} 
                strokeWidth={strokeWidth}
                stroke="transparent"
              />
            )
          })}
          <Circle cy="0" cx="0" r={innerRadius} fill="white" />
        </G>
      </Svg>
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  totalSpending: {
    paddingHorizontal: 10, 
    marginLeft: 35, 
    fontSize: 16, 
    marginTop: 65, 
    letterSpacing: -.5
  }
})
