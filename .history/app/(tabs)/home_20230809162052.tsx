import { StyleSheet, FlatList } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AchievementCard from '@/components/AchievementCard';
import goals from "../../assets/data/goals.json"


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Coin</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startedContainer}>
          <Text>Getting Started</Text>
          <FlatList 
            horizontal
            data={goals}
            renderItem={() => (
              <AchievementCard goals={goals} />
            )}
          />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  startedContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 20
  }
});
