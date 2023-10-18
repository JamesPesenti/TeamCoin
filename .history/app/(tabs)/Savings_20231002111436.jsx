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
import SavingsCard from "../../components/SavingsCard"


const Savings = () => {


  return (
   <>
    <View >  
     <Text>Savings Screen</Text>
    
    </View>
   </>
  );
}

export default Savings

