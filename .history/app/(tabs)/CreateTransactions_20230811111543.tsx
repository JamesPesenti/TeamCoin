import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateTransactions = () => {
  return (
    <View style={styles.container}> 
      <Text>Add transaction</Text>
    </View>
  )
}

export default CreateTransactions

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 20,
      padding: 0,
      justifyContent: 'center',

   }
})