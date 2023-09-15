import { StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Text, View } from '@/components/Themed';
import React from 'react'
import { DollarSign } from 'lucide-react-native';
import goals from "../assets/data/goals.json"

const AchievementList = () => {

  const width = Dimensions.get("window").width

  return (
    <>
      <ScrollView 
        horizontal
        contentContainerStyle={styles.container}
        snapToInterval={width - 90}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        itemVisiblePercentThreshold={20}
        showsHorizontalScrollIndicator={false}
      >
        {goals.map((goalItem) => (
          <Pressable>
            <View>
              <DollarSign size={29} color={"gray"} />
                <View key={goalItem.id} style={styles.card}>
                  <Text style={{ opacity: 1, fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{goalItem.name}</Text>
                  <Text style={{ fontSize: 18 }}>{goalItem.progress} / {goalItem.goalAmount} saved</Text>
                  <View style={styles.progressBar} lightColor="green" darkColor="rgba(255,255,255,0.1)" />
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
          </Pressable>
          ))}
     </ScrollView>
    </>
  )
}

export default AchievementList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: -20,
    right: 40,
    margin: 30,
    padding: 30
  },
  card: {
      width: 230,
      height: 150,
      backgroundColor: '#f7f7f5',
      margin: 10,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 10,
      marginHorizontal: 20,
  },
  progressBar: {
    marginVertical: 10,
    height: 10,
    width: '80%',
    borderRadius: 15,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    borderRadius: 10,
  },
});
