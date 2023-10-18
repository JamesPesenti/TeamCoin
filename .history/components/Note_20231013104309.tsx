import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native'
import { DollarSign } from 'lucide-react-native';

const width = Dimensions.get("window").width -40

const Note = ({ item, onPress }) => {
   const { title, goalProgress, goalAmount } = item;

  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.cardContainer}>
         <DollarSign size={29} color={"green"} />
            <View style={styles.card}>
               <Text style={styles.title} numberOfLines={2}>{title}</Text>
               <Text style={styles.goalAmount} numberOfLines={3}>{goalProgress} / {goalAmount}</Text>
            </View>
        </View>
      </TouchableOpacity>
  )
}

export default Note

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      flexDirection: "row",
      // width: width / 2 -10,
      backgroundColor: "transparent",
      borderRadius: 10,
      gap: 5,
      padding: 10,
      marginHorizontal: 0,
      marginBottom: 10,
      overflow: "hidden"
   },
   cardContainer: {
      marginHorizontal: -10
   },
   card: {
      width: 200,
      height: 140,
      backgroundColor: '#f7f7f5',
      margin: 10,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 10,
      marginHorizontal: 20,
  },
  title: {
   fontWeight: 'bold',
   fontSize: 20
  },
  goalAmount: {
   fontSize: 18
  }
})

















// import { StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native'
// import { Text, View } from '@/components/Themed';
// import { useEffect } from 'react'
// import { DollarSign } from 'lucide-react-native';
// import goals from "../assets/data/goals.json"
// import { Link } from "expo-router"
// import { getFinacialGoals } from "../assets/data/FinanceData"


// const AchievementList = () => {

//   // useEffect(() => {
//   //   const goalsData = await getFinacialGoals()
//   // }, [])

//   const width = Dimensions.get("window").width

//   return (
//     <>
//       <ScrollView 
//         horizontal
//         contentContainerStyle={styles.container}
//         snapToInterval={width - 90}
//         snapToAlignment={"center"}
//         decelerationRate={"fast"}
//         itemVisiblePercentThreshold={20}
//         showsHorizontalScrollIndicator={false}
//       >
//         {goals.map((goalItem) => (
//           <Link href="/Savings" asChild>
//             <Pressable onPress={() => console.warn("Works")}>
//               <View>
//                 <DollarSign size={29} color={"gray"} />
//                   <View key={goalItem.id} style={styles.card}>
//                     <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goalItem.name}</Text>
//                     <Text style={{ fontSize: 18 }}>{goalItem.progress} / {goalItem.goalAmount} saved</Text>
//                     <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
//                   </View>
//                   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//               </View>
//             </Pressable>
//           </Link>
//           ))}
//      </ScrollView>
//     </>
//   )
// }

// export default AchievementList

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     top: -20,
//     right: 40,
//     margin: 30,
//     padding: 30
//   },
//   card: {
//       width: 230,
//       height: 150,
//       backgroundColor: '#f7f7f5',
//       margin: 10,
//       padding: 15,
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//       borderRadius: 10,
//       marginHorizontal: 20,
//   },
//   progressBar: {
//     marginVertical: 10,
//     height: 10,
//     width: '80%',
//     borderRadius: 15,
//   },
//   separator: {
//     marginVertical: 20,
//     height: 1,
//     width: '100%',
//     borderRadius: 10,
//   },
// });
