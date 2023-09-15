import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"

const index = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Team Coin</Text>
          <OverviewList />
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
    alignSelf: "center",
    fontSize: 24,
    top: 50,
  }
})