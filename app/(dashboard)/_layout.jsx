import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { use } from "react";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; //

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabsBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },

        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen name="map" options={{ title: 'Map' , tabBarIcon: ( {focused}) => (
        <Ionicons
        size={25}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        name={focused ? 'map' : 'map-outline'}
      />
      ) }} />
      <Tabs.Screen name="navigate" options={{ title: "Navigate" , tabBarIcon: ({focused}) => (
        <Ionicons
        size={25}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        name={focused ? 'navigate' : 'navigate-outline'}
      />
      ) }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" , tabBarIcon: ({focused}) => (
        <Ionicons
        size={25}
        color={focused ? theme.iconColorFocused : theme.iconColor}
        name={focused ? 'person' : 'person-outline'}
      />
      ) }} />
    </Tabs>
  );
};

export default DashboardLayout;
