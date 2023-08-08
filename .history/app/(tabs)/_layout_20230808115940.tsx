import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PiggyBank } from 'lucide-react-native';
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
        name="index"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="code" color={color} />,
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
          headerShown: false,
          title: 'Savings',
          tabBarIcon: ({ color, size }) => <PiggyBank size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
