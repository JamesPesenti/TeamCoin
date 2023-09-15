import { Tabs } from "expo-router"
import { FontAwesome } from "@expo/vector-icons";

export default () => {
   return (
      <>
         <Tabs>
         <Tabs.Screen
            name="onBoarding"
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="home" size={24} color={color} />
               ),
               title: "onBoarding",
            }}
            />
               {/* <Tabs.Screen
                  name="feed"
                  options={{
                     tabBarIcon: ({ color }) => (
                       
            <FontAwesome name="envelope" size={24} color={color} />
                     ),
                     title: "Feed",
                  }}
               /> */}
         </Tabs>
      </>
   )
}