import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from "react"
import AchievementList from "../../components/AchievementList"
import OverviewList from "../../components/OverviewList"
import { Text, View } from '@/components/Themed';
import { Coins } from 'lucide-react-native';
import NoteScreen from "../NoteScreen"
import { LinearGradient } from "expo-linear-gradient"
  
const index = () => {

  const [user, setUser] = useState({})

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user")
    setUser(JSON.parse(result))
  }

  useEffect(() => {
    findUser()
  }, [])


  return (
    <>
      <LinearGradient colors={["blue" ,"white" ]} style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.container}> 
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Team Coin<Coins size={24} color={"grey"}/> </Text>
            </View>
                <View style={styles.listContainer}>
                  <NoteScreen user={user} />
                </View>
                  <Text style={styles.overview}>Overview</Text>
                  <OverviewList />
                  <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                  <Text style={styles.achievements}>Achievements</Text>
                  <AchievementList />
          </SafeAreaView>
        </ScrollView>
      </LinearGradient>
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
    marginVertical: 50
  },
  overview: {
    alignSelf: "flex-start",
    paddingTop: 40,
    color: "#626363", 
    fontWeight: "bold", 
    fontSize: 20, 
    left: 20, 
    marginVertical: 10
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
    color: "#626363", 
    fontWeight: "bold", 
    fontSize: 20, 
    left: 20, 
    marginVertical: 30
  }
})