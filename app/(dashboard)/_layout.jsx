import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const insets = useSafeAreaInsets()
  const bottomInset = insets.bottom;

  return (
    <>
      <UserOnly>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.navBackground,
              paddingTop: 10,
              height: bottomInset + 70,
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
          }}
        >
          <Tabs.Screen
            name="map"
            options={{
              title: "Map",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={25}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "map" : "map-outline"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="navigate"
            options={{
              title: "Navigate",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={25}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "navigate" : "navigate-outline"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={25}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "person" : "person-outline"}
                />
              ),
            }}
          />
        </Tabs>
      </UserOnly>
    </>
  );
};

export default DashboardLayout;
