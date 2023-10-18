import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import overview from "../assets/data/overview.json"
import { getFinancialGoals } from '../assets/data/FinanceData';
import OverviewCard from "../components/OverviewCard"


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
    top: -20,
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
  }
})

export default OverviewList

