import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import overview from "../assets/data/overview.json"


// Overview Card Component
export function OverviewCard ({ overview, index }) {
  return (
    <>
      <View style={styles.container}>
          {/* <DollarSign style={{marginTop: -20}} size={29} color={"gray"} /> */}
            <View key={index} style={styles.goalContainer}>
               <Text style={{ color: "gray", fontWeight: "bold", fontSize: 20, marginBottom: 5, marginRight: 10, }}>{overview.name}</Text>
               <Text style={{ margin: 20, fontSize: 22, fontWeight: "bold" }}>{overview.progress}</Text>
            </View>
      </View>
    </>
  )
}


// Overview List
const OverviewList = () => {
  return (
    <View>
      <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
         itemVisiblePercentThreshold={20}
      >
     {overview.map((overview, index) => (
       <OverviewCard key={index} overview={overview} />
     ))}
   </ScrollView>
 </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: -40,
    left: 15,
    marginHorizontal: 20,
  },
  goalContainer: {
    backgroundColor: "white",
    opacity: 1,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginHorizontal: -10,
    top: 50,
    marginBottom: 30,
    paddingVertical: 10,
    gap: 10
  },
  progressBar: {
    marginVertical: 10,
    height: 10,
    width: '80%',
    borderRadius: 15,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    borderRadius: 10,
  },
})

export default OverviewList

