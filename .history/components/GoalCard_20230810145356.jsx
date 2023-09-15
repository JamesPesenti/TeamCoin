import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalCard = ({ goal }) => {
  return (
    <View>
      <Text>{goal}</Text>
    </View>
  )
}

export default GoalCard

const styles = StyleSheet.create({})