import React from 'react';
import { View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { scaleOrdinal } from 'd3-scale';
import { arc } from 'd3-shape';

const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 45 },
  { label: 'C', value: 25 },
];

const colors = ['#ff5733', '#33ff57', '#5733ff'];

const PieChart = () => {
  const width = 200;
  const height = 200;
  const radius = Math.min(width, height) / 2;

  const pie = arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const colorScale = scaleOrdinal()
    .domain(data.map((d) => d.label))
    .range(colors);

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <View>
      <Svg width={width} height={height}>
        <G transform={`translate(${width / 2}, ${height / 2})`}>
          {data.map((d, index) => {
            const angle = (d.value / total) * 2 * Math.PI;
            const arcPath = pie({ startAngle: 0, endAngle: angle });

            return (
              <Path
                key={index}
                d={arcPath}
                fill={colorScale(d.label)}
              />
            );
          })}
        </G>
      </Svg>
    </View>
  );
};

export default PieChart;
