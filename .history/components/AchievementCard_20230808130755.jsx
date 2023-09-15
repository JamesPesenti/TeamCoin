import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';


const AchievementCard = () => {
  return (
    <>
      <View>
         <DollarSign />
      </View>
    </>
  )
}

export default AchievementCard

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 5,
      alignItems: 'left'
   }
})