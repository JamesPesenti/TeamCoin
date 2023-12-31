import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PlusCircle, Home, PiggyBank, Plus, ArrowRightLeft, CandlestickChart, UserSquare2 } from 'lucide-react-native';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3e9c35",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Savings"
        options={{
          title: 'Savings',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <PiggyBank size={size} color={color} />,
          headerRight: () => (
            <Link href="/createGoal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Plus
                    size={30}
                    color={"green"}
                    style={{ marginRight: 15, opacity: pressed ? 0.3 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="CreateTransactions"
        options={{
          presentation: 'modal',
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
              <Link href="/createTransactionsModal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <PlusCircle 
                    style={{marginTop: 8, backgroundColor: "white", borderRadius: 50}}
                    size={47} 
                    color={color}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Budget"
        options={{
          headerShown: false,
          title: 'Budget',
          tabBarIcon: ({ color, size }) => <CandlestickChart size={size} color={color} />,
        }}
      />
       {/* <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <UserSquare2 size={size} color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="IntroScreen"
        options={{
          headerShown: false,
          title: 'Intro',
          tabBarIcon: ({ color, size }) => <UserSquare2 size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
