import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from "expo-router"
import React from 'react'

const onBoarding = () => {
  return (
    <>
      <View style={styles.container}>
         {/* <Text style={{fontSize: 20}}>This is the onboarding screen!</Text> */}
         <Link href="/modal">
          <Pressable style={{backgroundColor: "red", padding: 20}}>
            <Text style={{fontSize: 10}}>+</Text>
          </Pressable>
         </Link>
      </View>
    </>
  )
}

export default onBoarding

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    marginVertical: 40
  }
})