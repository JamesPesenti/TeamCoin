import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"

const index = () => {
  return (
    <>
      <View style={styles.container}> 
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Team Coin</Text>
        </View>
          <View style={styles.listContainer}>
            <OverviewList />
            
          </View>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white"
  },
  titleContainer: {
    paddingTop: 50,
    backgroundColor: "white"
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    top: 0,
  },
  listContainer: {
    // backgroundColor: "white"
  }
})