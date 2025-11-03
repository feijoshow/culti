// app/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ChatAssistantScreen from "./screens/ChatAssistantScreen";
import CropDoctorScreen from "./screens/CropDoctorScreen";
import HomeScreen from "./screens/HomeScreen";
import PlanningToolsScreen from "./screens/PlanningToolsScreen";
import WeatherCalendarScreen from "./screens/WeatherCalendarScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "CropDoctor") {
              iconName = focused ? "medkit" : "medkit-outline";
            } else if (route.name === "Weather") {
              iconName = focused ? "cloud" : "cloud-outline";
            } else if (route.name === "Planning") {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else {
              iconName = "help-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4CAF50",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#4CAF50",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "AgriAI Pro" }} />
        <Tab.Screen name="CropDoctor" component={CropDoctorScreen} options={{ title: "Crop Doctor" }} />
        <Tab.Screen name="Weather" component={WeatherCalendarScreen} options={{ title: "Weather & Calendar" }} />
        <Tab.Screen name="Planning" component={PlanningToolsScreen} options={{ title: "Planning Tools" }} />
        <Tab.Screen name="Chat" component={ChatAssistantScreen} options={{ title: "FarmAI Chat" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});