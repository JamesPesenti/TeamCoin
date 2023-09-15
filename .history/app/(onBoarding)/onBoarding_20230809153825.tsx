import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from "expo-router"
import React from 'react'

const onBoarding = () => {
  return (
    <>
      <View style={styles.container}>
         {/* <Text style={{fontSize: 20}}>This is the onboarding screen!</Text> */}
         <Link href="/onBoarding">
          <Pressable style={{backgroundColor: "red"}}>
            <Text style={{fontSize: 40}}>Go to Home</Text>
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