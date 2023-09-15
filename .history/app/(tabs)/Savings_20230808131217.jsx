import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import { Card } from '@tamagui/card' 
import AchievementCard from "@/components/AchievementCard"

export default function Savings() {
  return (
    <View style={styles.container}>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{justifyContent: "left"}}>
          <AchievementCard />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 0
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
