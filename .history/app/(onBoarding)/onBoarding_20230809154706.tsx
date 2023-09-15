import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link, useRouter } from "expo-router"
import React from 'react'

const onBoarding = () => {

  const router = useRouter()
  return (
    <>
      <View style={styles.container}>
         <Text style={{fontSize: 20}}>This is the onboarding screen!</Text>
         {/* <Link href="/(onBoarding)\onBoarding.tsx"> */}
          <Pressable 
            onPress={() => router.push("/(onBoarding)/onBoarding")}
            style={{backgroundColor: "red", padding: 120}}
          >
            <Text style={{fontSize: 80}}>+</Text>
          </Pressable>
         {/* </Link> */}
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