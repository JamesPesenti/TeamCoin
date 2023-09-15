import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DollarSign } from 'lucide-react-native';


const AchievementCard = () => {
  return (
    <>
      <View style={styles.container}>
         <DollarSign size={size} color={color} />
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