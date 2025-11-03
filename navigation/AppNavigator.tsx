import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../lib/theme';

import ChatAssistantScreen from '../screens/ChatAssistantScreen';
import CropDoctorScreen from '../screens/CropDoctorScreen';
import HomeScreen from '../screens/HomeScreen';
import PlanningToolsScreen from '../screens/PlanningToolsScreen';
import WeatherCalendarScreen from '../screens/WeatherCalendarScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CropDoctor"
        component={CropDoctorScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit" size={size} color={color} />
          ),
          title: 'Crop Doctor',
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherCalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud" size={size} color={color} />
          ),
          title: 'Weather',
        }}
      />
      <Tab.Screen
        name="Planning"
        component={PlanningToolsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
          title: 'Tools',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatAssistantScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          title: 'Assistant',
        }}
      />
    </Tab.Navigator>
  );
}