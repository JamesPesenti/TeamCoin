import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnterName = () => {
   const [name, setName] = useState("")
   const handleOnChangeText = text => setName(text)
   
   const handleSubmit = async () => {
      const user = { name: name}
      await AsyncStorage.setItem("user", JSON.stringify(user))
   }

   const findUser = async () => {
      const result = await AsyncStorage.getItem("user")
      console.log(result)
   }

   useEffect(() => {
      findUser()
   }, [])

  return (
    <>
      <View style={styles.container}>
         <Text style={styles.label}>Name:</Text>
         <TextInput
            placeholder="Enter Name"
            style={styles.input}
            value={name}
            onChangeText={handleOnChangeText}
         />

         {/* <Text style={styles.label}>Goal Amount:</Text>
         <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
         /> */}

         <Pressable style={styles.button} onPress={handleSubmit}>
            <Text  style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Update Name</Text>
         </Pressable>
      </View>
    </>
  )
}

export default EnterName

const styles = StyleSheet.create({

})