import { Stack } from "expo-router"
import { FontAwesome } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';


export default () => {
   const colorScheme = useColorScheme();
   return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme }>
       <Stack>
         <Stack.Screen
            name="onBoarding"
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="home" size={24} color={color} />
               ),
               title: "On Boarding",
            }}
            />
         </Stack>
         </ThemeProvider>
      </>
   )
}