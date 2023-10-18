import { StyleSheet, ScrollView } from 'react-native'
import { useEffect } from "react"
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"
import { Text, View } from '@/components/Themed';
import { Coins } from 'lucide-react-native';
import { FIRESTORE_DB } from "../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore" 
  
const index = () => {
  useEffect(() => {}, [])

  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, "todos"), { title: "i am a test", done: false})
    console.log("add to do")
  } 

  return (
    <>
      <ScrollView>
        <View style={styles.container}> 
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Team Coin<Coins size={24} color={"grey"}/> </Text>
          </View>
            <View style={styles.listContainer}>
            <Text style={styles.overview}>Overview</Text>
              <OverviewList />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    color: "#3e9c35",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    top: 0,
  },
  listContainer: {

  },
  overview: {
    alignSelf: "flex-start",
    paddingTop: 50,
    left: 15,
    fontSize: 20,
  },
  separator: {
    color: "#eee",
    marginVertical: 0,
    height: 1,
    width: '100%',
    borderRadius: 10,
  },
  achievements: {
    alignSelf: "flex-start",
    paddingTop: 50,
    left: 15,
    fontSize: 20,
  }
})