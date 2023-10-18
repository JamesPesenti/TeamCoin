import { 
  TouchableWithoutFeedback, 
  Pressable,
  Modal, 
  StyleSheet, 
  TextInput, 
  Text,
  View, 
  StatusBar,
  Keyboard,
  Dimensions
} from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import Button from './Button'


const width = Dimensions.get("window").width

const NoteInputModal = ({ visible, onSubmit, onClose }) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleModalClose = () => {
    Keyboard.dismiss()
  }

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text)
    if (valueFor === "desc") setDesc(text)
  }

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose()
    onSubmit(title, desc)
    setTitle("")
    setDesc("")
    onClose()
  }

  const closeModal = () => {
    setTitle("")
    setDesc("")
    onClose()
  }
  
  return (
    <>
     <StatusBar hidden />
      <Modal visible={visible} animationType='fade' >
       <View style={styles.textInputContainer}>
        <TextInput
            placeholder='Title' 
            value={title}
            style={styles.textInput}
            onChangeText={(text) => handleOnChangeText(text, "title")}
          />
          <TextInput 
            placeholder='Note' 
            value={desc}
            multiline
            style={styles.textInput}
            onChangeText={(text) => handleOnChangeText(text, "desc")}
          />
       </View>
       <View style={styles.buttonContainer}>
        <Pressable onPress={handleSubmit}>
          <Text style={styles.submitButton}>Submit</Text>
        </Pressable>
        {title.trim() || desc.trim() ? (
          <Pressable 
            onPress={onClose}
            style={styles.button}
          >
            <Text style={styles.buttonIcon}>X</Text>
          </Pressable>
        ) : null
       }
       </View>
       <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBackground, StyleSheet.absoluteFillObject]}/>
       </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

export default NoteInputModal

const styles = StyleSheet.create({
  textInputContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
    gap: 20
  },
  textInput: {
    borderBottomWidth: 1.2,
    left: 20,
    right: 20,
    borderColor: "#ffc0cb",
    width: width,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  submitButton: {
    color: "#ffc0cb",
    fontWeight: "bold",
 }, 
 button: {
    padding: 0,
    width: 35,
    height: 35,
    backgroundColor: "#ffc0cb",
    borderRadius: 100,
 },
 buttonIcon: {
    top: 8,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
 },
  modalBackground: {
    flex: 1,
    zIndex: -1
  }
})