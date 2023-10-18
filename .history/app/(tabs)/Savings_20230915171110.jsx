import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
// import { Card } from '@tamagui/card' 
import AchievementCard from "../../components/AchievementCard"
import { FIRESTORE_DB } from "../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore" 


export default function Savings() {

  useEffect(() => {}, [])

  const addTodo = async () => {
    console.log("add to do")
    const doc = addDoc(collection(FIRESTORE_DB, "todos"), { title: "i am a test", done: false})
  } 

  return (
   <>
     <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.contentContainer}>
              <AchievementCard />
          </View>
        </View>
     </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
  }
});
