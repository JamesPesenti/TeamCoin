import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RingProgress from "../BudgetRings/RingProgress"
import monthlyRingProgress from "../../assets/data/monthlyringData.json"

const MonthlyTotalSpending = () => {
  return (
    <>
      <View style={styles.container}>
        {monthlyRingProgress.map((monthly, index) => (
            <RingProgress key={index} monthly={monthly}/>
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