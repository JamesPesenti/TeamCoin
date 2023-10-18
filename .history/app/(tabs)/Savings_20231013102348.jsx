import { StyleSheet, ScrollView } from 'react-native';
import { Button, Text, View } from '../../components/Themed';
// import { Card } from '@tamagui/card' 
import AchievementCard from "../../components/AchievementCard"
import { LinearGradient } from "expo-linear-gradient"

const Savings = () => {

  return (
   <>
    <LinearGradient colors={["blue" ,"white" ]} style={{flex: 1}}>
     {/* <ScrollView>
      <View style={styles.container}>
       
          <View style={styles.contentContainer}>
              <AchievementCard />
          </View>
        </View>
     </ScrollView> */}
     <Text>Does it work?</Text>
     <View >
        <View style={styles.contentContainer}>
          <AchievementCard />
        </View>
      </View>
     </LinearGradient>
   </>
  );
}

export default Savings

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    // flex: 1,
    paddingHorizontal: 20,
    width: "100%",
  }
});

