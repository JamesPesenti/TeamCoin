import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

const ExpenseChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const animatedValues = chartData.map(() => new Animated.Value(0));

  useEffect(() => {
    const total = data.values.reduce((acc, value) => acc + value, 0);
    const angles = data.values.map(value => (value / total) * 360);

    setChartData(
      angles.map((angle, index) => ({
        angle,
        color: getRandomColor(),
        value: data.values[index],
      }))
    );
  }, [data]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const renderChartSegment = (segment, index) => {
    const startAngle = index === 0 ? 0 : chartData.slice(0, index).reduce((acc, d) => acc + d.angle, 0);
    const endAngle = startAngle + segment.angle;

    const animatedStyle = {
      transform: [
        {
          rotate: animatedValues[index].interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', `${segment.angle}deg`],
          }),
        },
      ],
    };

    return (
      <Animated.View
        key={index}
        style={[
          styles.chartSegment,
          {
            backgroundColor: segment.color,
            transform: [
              { translateX: 50 }, // Center of the chart container
              { translateY: -100 }, // Adjust to position the segments within the circle
              { rotate: `${startAngle}deg` },
            ],
          },
          animatedStyle,
        ]}
      >
        {/* You can add labels or values inside each segment */}
        <Text>jdjdjdjdjdj</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.chartContainer}>
      {chartData.map((segment, index) => renderChartSegment(segment, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
  },
  chartSegment: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExpenseChart;

