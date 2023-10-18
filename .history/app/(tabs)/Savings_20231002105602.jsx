import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
   Pressable,
   TouchableOpacity, 
   FlatList, 
   TouchableWithoutFeedback, 
   StyleSheet, 
   Text, 
   View, 
   Keyboard, 
   Button
} from 'react-native';
import { useState, useEffect } from 'react';
import { Link, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import AchievementCard from "../../components/AchievementCard"


const Savings = () => {

  const [savings, setSavings] = useState([])

  // const findSavings = async () => {
  //   const result = await AsyncStorage.getItem("savings")
  //   if(result !== null) setSavings(JSON.parse(result))
  // }

  // useEffect(() => {
  //   findSavings()
  // }, [])

  return (
   <>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={savings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/NoteDetail", params: { title: item.title, desc: item.desc } }}>
            <TouchableOpacity>
              <AchievementCard
                item={item} 
              />
            </TouchableOpacity>
          </Link>
        )}
      />   
     {/* <ScrollView>
      <View style={styles.container}>
          <View style={styles.contentContainer}>
              <AchievementCard />
          </View>
        </View>
     </ScrollView> */}
   </>
  );
}

export default Savings

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

