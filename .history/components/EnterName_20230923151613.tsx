import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnterName = () => {
   const [name, setName] = useState("")

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
         <Text style={styles.label}>Goal Name:</Text>
         <TextInput
            style={styles.input}
            value={goalName}
            onChangeText={(text) => setGoalName(text)}
         />

         <Text style={styles.label}>Goal Amount:</Text>
         <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
         />

         <Pressable style={styles.button} onPress={handleSubmit}>
            <Text  style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Update Goal</Text>
         </Pressable>
      </View>
    </>
  )
}

export default EnterName

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
      paddingVertical: 80
    },
    label: {
      color: "black",
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      color: "gray",
      marginBottom: 16,
      padding: 8,
      borderColor: 'gray',
      borderWidth: .2,
      borderRadius: 2,
    },
    buttonContainer: {
      marginVertical: 50, 
      justifyContent: 'center', 
      alignItems: 'center', 
      alignSelf: 'center'
     },
     button: {
      marginTop: "auto", 
      marginBottom: "auto", 
      backgroundColor: "#58af84",
      width: 200, 
      height: 50, 
      padding: 15, 
      borderRadius: 5
     }
})