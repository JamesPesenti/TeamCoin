import { Stack } from "expo-router"
import { FontAwesome } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default () => {
   const colorScheme = useColorScheme();
   return (
    <>
     <StatusBar animated={true} backgroundColor="white" style="dark" />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
       <Stack>
         <Stack.Screen
            name="onBoarding"
            options={{
               headerShown: false
            }}
         />
          <Stack.Screen name="/(tabs)/Home" options={{ headerShown: false }} />
         </Stack>
         </ThemeProvider>
      </>
   )
}