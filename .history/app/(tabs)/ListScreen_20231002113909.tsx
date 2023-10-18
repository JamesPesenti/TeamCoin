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
import SearchBar from "../components/SearchBar";
import NoteInputModal from '../components/NoteInputModal';
import Note from '../components/Note';
import { Link, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const ListScreen = ({ user }) => {

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
      <Text>{`Good ${greeting} ${user.name}`}</Text>
    </>
  )
}

export default ListScreen

const styles = StyleSheet.create({})