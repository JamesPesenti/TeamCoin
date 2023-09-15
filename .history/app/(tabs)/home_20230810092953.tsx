import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import AchievementList from '@/components/AchievementList';
import goals from "../../assets/data/goals.json"


export default function Home() {
  return (
   <>

              <ScrollView horizontal={true} >
                <AchievementList goals={goals} />
              </ScrollView>
  
   </>
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
    flexDirection: "row",
    alignSelf: 'flex-start',
    paddingLeft: 20
  }
});
