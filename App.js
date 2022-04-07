import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewTweet from "./screens/NewTweet";
import TweetScreen from "./screens/TweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackButtonTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={"Tab"}
        component={TabStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"New Tweet"}
        component={NewTweet}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={"Tweet Screen"}
        component={TweetScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={"Profile Screen"}
        component={ProfileScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};
const TabStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Home Screen"}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings Screen" component={SettingsScreen} />
      </Drawer.Navigator>
      {/*<HomeStackNavigator/>*/}
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
