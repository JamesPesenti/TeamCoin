import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
   Pressable,
   TouchableOpacity, 
   FlatList, 
   TouchableWithoutFeedback, 
   StyleSheet, 
   Text, 
   View, 
   Keyboard 
} from 'react-native';
import { useState, useEffect } from 'react';
import NoteInputModal from '../components/NoteInputModal';
import { Link, useRouter } from "expo-router";
import OverviewCard from "../components/OverviewCard"
import { AntDesign } from '@expo/vector-icons';


const OverviewList = () => {

   const [modalVisible, setModalVisible] = useState(false);
   const [overviews, setOverviews] = useState([]);
 
   const findOverview = async () => {
     const result = await AsyncStorage.getItem("overviews");
     if (result !== null) setOverviews(JSON.parse(result));
   }
 
   useEffect(() => {
     findOverview();
   }, []);
 
   const handleOnSubmit = async (title, goalAmount, goalProgress) => {
     const overview = { id: Date.now(), title, goalAmount, goalProgress, time: Date.now() };
     const updatedOverviews = [...overviews, overview];
     setOverviews(updatedOverviews);
     await AsyncStorage.setItem("overviews", JSON.stringify(updatedOverviews));
   }



  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         itemVisiblePercentThreshold={20}
         style={{paddingLeft: 20}}
         data={overviews}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => (
          <Link 
            href={{ 
              pathname: "/NoteDetail", 
              params: { 
                title: item.title, 
                goalAmount: item.goalAmount, 
                goalProgress: item.goalProgress
              } 
            }}
          >
            <TouchableOpacity>
              <OverviewCard 
                item={item} 
              />
            </TouchableOpacity>
          </Link>
         )}
      />
        {!overviews.length ? (
            <View style={[StyleSheet.absoluteFillObject, styles.addNotesContainer]}>
              <Text style={styles.addNotes}>Keep track of financial journey{`${"(ex Credit score)"}`}</Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="plus" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <NoteInputModal
        visible={modalVisible}
        onSubmit={handleOnSubmit}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    top: -20,
    left: 15,
    marginHorizontal: 20,
  },
  goalContainer: {
    backgroundColor: "white",
    opacity: 1,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginHorizontal: -10,
    top: 50,
    marginBottom: 30,
    paddingVertical: 10,
    gap: 10
  },
  progressBar: {
    marginVertical: 10,
    height: 10,
    width: '80%',
    borderRadius: 15,
  },
  addNotesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNotes: {
    textTransform: "uppercase",
    lineLength: 4,
    opacity: 0.5,
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "gray",
    borderWidth: 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
})

export default OverviewList

