import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Pressable
} from 'react-native';
import Button from "../../components/Button"
// import RoundIconBtn from '../components/RoundIconBtn';
// import colors from '../misc/colors';

export default function IntroScreen ({ onFinish }) {
  const [name, setName] = useState('');

  const handleOnChangeText = text => setName(text);
  
  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish()
  };

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





