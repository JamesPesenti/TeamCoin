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
import NoteInputModal from './NoteInputModal';
import Note from './Note';
import { Link, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const NoteScreen = ({ user }) => {

   const [greeting, setGreeting] = useState("Time of day")
   const [modalVisible, setModalVisible] = useState(false);
   const [notes, setNotes] = useState([]);
 
   const findNotes = async () => {
     const result = await AsyncStorage.getItem("notes");
     if (result !== null) setNotes(JSON.parse(result));
   }
 
   useEffect(() => {
     findNotes();
   }, []);
 
   const handleOnSubmit = async (title, desc) => {
     const note = { id: Date.now(), title, desc, time: Date.now() };
     const updatedNotes = [...notes, note];
     setNotes(updatedNotes);
     await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
   }
 
   // const getTimeOfDay = () => {
   //   const today = new Date();
   //   const curHr = today.getHours();
 
   //   if (curHr < 4) {
   //     return "Night";
   //   } else if (curHr < 12) {
   //     return "Morning";
   //   } else if (curHr < 18) {
   //     return "Afternoon";
   //   } else {
   //     return "Evening";
   //   }
   // }
 

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.greeting}>{`Good ${greeting} ${user.name}`}</Text>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={notes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Link href={{ pathname: "/NoteDetail", params: { title: item.title, desc: item.desc } }}>
                <TouchableOpacity>
                  <Note
                    item={item} 
                  />
                </TouchableOpacity>
              </Link>
            )}
          />
          {!notes.length ? (
            <View style={[StyleSheet.absoluteFillObject, styles.addNotesContainer]}>
              <Text style={styles.addNotes}>Add Notes</Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {/* <NoteInputModal
        visible={modalVisible}
        onSubmit={handleOnSubmit}
        onClose={() => setModalVisible(false)}
      /> */}
    </>
  )
}

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    zIndex: 1,
  },
  greeting: {
    marginVertical: 20,
  },
  addNotesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNotes: {
    textTransform: "uppercase",
    opacity: 0.5,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    backgroundColor: "#ffc0cb",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});