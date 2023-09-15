import { StyleSheet, View,  } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import { Card } from '@tamagui/card' 

export default function Savings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "auto"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});