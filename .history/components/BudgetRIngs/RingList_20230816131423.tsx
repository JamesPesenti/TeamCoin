import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import RingCard from "../../components/BudgetRings/RingCard"
import ringData from "../../assets/data/ringData.json"


const RingList = ({ radius = 100, strokeWidth = 25, progress }) => {

  const width = Dimensions.get("window").width

  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  // Animation speed
  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);

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
      stroke: "#58af84",
      strokeLinecap: "line",
    };

  return (
   <View style={styles.container}>
      <ScrollView 
         horizontal
         contentContainerStyle={{overflow: "hidden", gap: 40}}
         showsHorizontalScrollIndicator={false}
         snapToInterval={width - 120}
         snapToAlignment={"center"}
         decelerationRate={"fast"}
         itemVisiblePercentThreshold={20}
      >
     {ringData.map((ring, index, progress) => (
       <RingCard 
         key={index}
         ring={ring}
         {...circleDefaultProps}
       />
     ))}
   </ScrollView>
 </View>
);
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingBottom: 40
   },
});

export default RingList