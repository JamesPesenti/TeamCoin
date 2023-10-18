import {
   View,
   StyleSheet,
   Text,
   TextInput,
   StatusBar,
   Dimensions,
   Pressable
 } from 'react-native';
import { useState, useEffect } from 'react'

const IntroScreen = () => {

   const [name, setName] = useState("")

   const handleOnChangeText = text => setName(text)

   const handleSubmit = () => {}

  return (
    <>
      <StatusBar hidden />
         <View style={styles.container}>
            <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
            <TextInput
               value={name}
               onChangeText={handleOnChangeText}
               placeholder='Enter Name'
               style={styles.textInput}
            />
            {name.trim().length >= 3 ? (
               <Button onPress={handleSubmit}/>
            ) : null}
         </View>
    </>
   );
  };

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
},
textInput: {
 borderWidth: 2,
 width,
 height: 50,
 borderRadius: 10,
 paddingLeft: 15,
 fontSize: 25,
 marginBottom: 15,
},
inputTitle: {
 alignSelf: 'flex-start',
 paddingLeft: 25,
 marginBottom: 5,
 opacity: 0.5,
},
});

export default IntroScreen


