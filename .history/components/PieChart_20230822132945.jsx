import React from 'react';
import { View } from 'react-native';
import Svg, { G, Circle, Path } from 'react-native-svg';
import spendingData from "../assets/data/spendingData.json"

const data = [
  { label: 'Home', value: 90, color: '#6cdf94' },
  { label: 'Food & Dining', value: 10, color: '#5368b7' },
  { label: 'Travel', value: 10, color: '#b75353' },
  { label: 'Bills & Utilities', value: 15, color: '#6ec46f' },
  { label: 'Shopping', value: 15, color: '#33ff57' },
  { label: 'Car & Transportation', value: 10, color: '#5733ff' },
  { label: 'Personal Care', value: 15, color: '#6ec46f' },
  { label: 'Health & Fitness', value: 15, color: '#33ff57' },
  { label: 'Fees & Charges', value: 10, color: '#5733ff' },
]


const PieChart = () => {
  const width = 300;
  const height = 220;
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius * 0.7;
  const strokeWidth = 10;
  const cx = width / 2.6;
  const cy = height / 2;

  const total = data.reduce((sum, d) => sum + d.value, 0);

  let startAngle = 0;
  let endAngle = 0;

  return (
    <View style={{right: 27}}>
      <Svg width={width} height={height}>
        <G transform={`translate(${cx}, ${cy})`}>
          {data.map((d, index) => {
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
