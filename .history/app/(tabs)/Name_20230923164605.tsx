import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import EnterName from '@/components/EnterName'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Name = () => {

   const findUser = async () => {
      const result = await AsyncStorage.getItem("user")
      console.log(result)
   }

   useEffect(() => {
      findUser()
   }, [])

  return (
    <View>
      <EnterName />
    </View>
  )
}

export default Name

const styles = StyleSheet.create({})