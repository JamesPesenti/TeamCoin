import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"

const index = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Title</Text>
          <AchievementList />
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {

  }
})