import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import EnterName from '@/components/EnterName'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Name = () => {
   const [user, setUser] = useState({})
   const findUser = async () => {
      const result = await AsyncStorage.getItem("user")
      setUser(JSON.parse(result))
      // console.log(result)
   }

   useEffect(() => {
      findUser()
   }, [])

  return (
    <View>
      <EnterName user={user} />
    </View>
  )
}

export default Name

const styles = StyleSheet.create({})