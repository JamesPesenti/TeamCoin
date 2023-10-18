import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.button}>
      <Text style={{color: "white"}}>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
   button: {
      width: 40,
      height: 40,
      backgroundColor: "purple",
      borderRadius: 100
   }
})