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

const ListScreen = () => {
  return (
    <View>
      <Text>ListScreen</Text>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({})