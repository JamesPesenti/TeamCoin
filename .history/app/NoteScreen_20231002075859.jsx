import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

const NoteScreen = ({ user }) => {

   const [greeting, setGreeting] = useState("Evening")

  return (
    <View>
      <Text>{`Good ${greeting}`}</Text>
      <Text>Current Goals</Text>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({})