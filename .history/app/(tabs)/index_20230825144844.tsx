import { StyleSheet, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"
import { Text, View } from '@/components/Themed';

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
            <View style={styles.separator} />
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
    paddingTop: 50,
    left: 25,
    fontSize: 20,
  },
  separator: {
    color: "#eee",
    marginVertical: 20,
    height: 10,
    width: '100%',
    borderRadius: 10,
  },
  achievements: {
    alignSelf: "flex-start",
    paddingTop: 50,
    left: 25,
    fontSize: 20,
  }
})