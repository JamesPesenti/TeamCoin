import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"

const index = () => {
  return (
    <>
     <Text style={styles.title}>Team Coin</Text>
      <View style={styles.container}>
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