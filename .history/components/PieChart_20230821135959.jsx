import React from 'react';
import { View } from 'react-native';
import Pie from 'react-native-pie';

const data = [
  { label: 'A', value: 30, color: '#ff5733' },
  { label: 'B', value: 45, color: '#33ff57' },
  { label: 'C', value: 25, color: '#5733ff' },
];

const PieChart = () => {
  return (
    <View>
      <Pie
        radius={80}
        innerRadius={60}
        sections={data.map((item) => ({
          percentage: (item.value / data.reduce((acc, curr) => acc + curr.value, 0)) * 100,
          color: item.color,
        }))}
      />
    </View>
  );
};

export default PieChart;
