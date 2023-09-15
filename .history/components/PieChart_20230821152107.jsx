import React from 'react';
import { View } from 'react-native';
import Svg, { G, Circle, Path } from 'react-native-svg';

const data = [
  { label: 'A', value: 30, color: '#ff5733' },
  { label: 'B', value: 45, color: '#33ff57' },
  { label: 'C', value: 25, color: '#5733ff' },
];

const PieChart = () => {
  const width = 200;
  const height = 200;
  const radius = Math.min(width, height) / 1;
  const cx = width / 2;
  const cy = height / 2;

  const total = data.reduce((sum, d) => sum + d.value, 0);

  let startAngle = 0;
  let endAngle = 0;

  return (
    <View>
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

            return <Path key={index} d={path} fill={d.color} />;
          })}
        </G>
      </Svg>
    </View>
  );
};

export default PieChart;