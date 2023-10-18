import AsyncStorage from '@react-native-async-storage/async-storage';

const GOALS_KEY = 'user_goals';

// Function to get financial goals from AsyncStorage
export const getFinancialGoals = async () => {
  try {
    const goalsData = await AsyncStorage.getItem(GOALS_KEY);
    if (goalsData) {
      return JSON.parse(goalsData);
    }
    return [];
  } catch (error) {
    console.error('Error getting financial goals:', error);
    return [];
  }
};

// Function to set/update financial goals in AsyncStorage
export const setFinancialGoals = async (goals) => {
  try {
    const goalsData = JSON.stringify(goals);
    await AsyncStorage.setItem(GOALS_KEY, goalsData);
  } catch (error) {
    console.error('Error setting financial goals:', error);
  }
};
