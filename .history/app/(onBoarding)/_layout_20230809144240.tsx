import { Stack } from "expo-router"
import { FontAwesome } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';


export default () => {
   const colorScheme = useColorScheme();
   return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
       <Stack>
         <Stack.Screen
            name="onBoarding"
    
            />
         </Stack>
         </ThemeProvider>
      </>
   )
}