import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"

const index = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}> 
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Team Coin</Text>
          </View>
            <View style={styles.listContainer}>
            <Text style={styles.overview}>Overview</Text>
              <OverviewList />
            <Text style={styles.achievements}>Achievements</Text>
              <AchievementList />
            </View>
        </View>
      </ScrollView>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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

  },
  overview: {
    alignSelf: "flex-start",
    top: 10,
    left: 10,
    fontSize: 18,
  },
  achievements: {
    alignSelf: "flex-start",
    left: 10,
    fontSize: 18,
  }
})