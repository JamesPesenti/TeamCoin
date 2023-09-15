import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RingProgress from "../BudgetRings/RingProgress"
import monthlyRingProgress from "../../assets/data/monthlyringData.json"

const MonthlyTotalSpending = () => {
  return (
    <>
      <View style={styles.container}>
        {monthlyRingProgress.map((item) => (
            <RingProgress 
               key={item.id} 
               progress={item.progress}
               strokeColor={item.strokeColor}
            />
        ))}
      </View>
    </>
  )
}

export default MonthlyTotalSpending

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})