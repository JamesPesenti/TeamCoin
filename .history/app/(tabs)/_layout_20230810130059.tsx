import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PiggyBank, Plus, arrow-right-left } from 'lucide-react-native';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
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
        name="Transactions"
        options={{
          headerShown: false,
          title: 'Transactions',
          tabBarIcon: ({ color, size }) => <ArrowRightLeft size={size} color={color} />,
        }}
      />
       <Tabs.Screen
        name="Budget"
        options={{
          headerShown: false,
          title: 'Budget',
          tabBarIcon: ({ color, size }) => <PiggyBank size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
