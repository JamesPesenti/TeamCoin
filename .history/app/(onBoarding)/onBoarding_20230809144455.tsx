import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const onBoarding = () => {
  return (
    <>
      <View style={styles.container}>
         <Text style={{fontSize: 20}}>This is the onboarding screen!</Text>
      </View>
    </>
  )
}

export default onBoarding

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  }
})