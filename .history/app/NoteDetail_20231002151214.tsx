import { Alert, ScrollView, Pressable, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router"
 

const NoteDetail = () => {

   const { title, goalAmount, goalProgress } = useLocalSearchParams() 
   const router = useRouter()

   const displayDeleteAlert = () => {
      Alert.alert("Are You Sure?", 
      [
        { 
            text: "Delete",
            onPress: () => console.log("delete note"),
        },
        { 
          text: "No Thanks",
          onPress: () => console.log("no thanks"),
        },
     ],
     {
        cancelable: true
     }
     );
   };

  return (
    <>
    {/* Back Button */}
      <Pressable onPress={() => router.push("/")} style={styles.buttonContainer}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line} />
            <Text style={styles.goalAmount}>{goalAmount}</Text>
            <Text style={styles.goalAmount}>{goalProgress}</Text>
            <Pressable
              style={styles.delete}
              onPress={displayDeleteAlert}
            >
              <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
            </Pressable>
        </ScrollView>
    </>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    left: 5
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#ffc0cb"
  },
  line: {
    marginVertical: 5,
    borderWidth: 1.2,
    paddingHorizontal: 110,
    borderColor: "#ffc0cb",
    opacity: 0.3
  },
  goalAmount: {
    fontSize: 18,
    color: "#ffc0cb",
    opacity: .8
  },
  delete: {
    position: 'absolute',
    alignSelf: "flex-end",
    right: 50,
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffc0cb",
    borderRadius: 50,
    width: 40,
    height: 40,
    elevation: 5,
  },
})