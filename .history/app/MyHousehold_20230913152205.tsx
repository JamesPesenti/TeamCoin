import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyHousehold = () => {
  return (
    <View style={styles.container}>
      <Text>My Household</Text>
    </View>
  )
}

export default MyHousehold

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
   }
})