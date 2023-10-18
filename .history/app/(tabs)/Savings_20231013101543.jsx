import { StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import AchievementCard from "../../components/AchievementCard";

const Savings = () => {
  return (
    <>
      <LinearGradient colors={["blue", "white"]} style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.contentContainer}>
              <AchievementCard />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Savings;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
    // paddingTop: 40,  // Remove this line to see if it affects the position
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
  },
});
