import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AchievementList from "../../components/AchievementList"

const index = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={{flexDirection: 'row'}}>
            <AchievementList />
          </ScrollView>
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
  }
})