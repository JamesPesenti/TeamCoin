import { StyleSheet, ScrollView } from 'react-native';
import { Button, Text, View } from '../../components/Themed';
// import { Card } from '@tamagui/card' 
import AchievementCard from "../../components/AchievementCard"


export default function Savings() {


  return (
   <>
     <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.contentContainer}>
              <AchievementCard />
              <Button title="add" onPress={() => addTodo()} />
          </View>
        </View>
     </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
  }
});
