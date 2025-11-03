// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import your screens
import CalculatorScreen from './screens/CalculatorScreen';
import ChatAssistantScreen from './screens/ChatAssistantScreen';
import CropDetailScreen from './screens/CropDetailScreen';
import CropDoctorScreen from './screens/CropDoctorScreen';
import DiseaseDetailScreen from './screens/DiseaseDetailScreen';
import HomeScreen from './screens/HomeScreen';
import PlanningToolsScreen from './screens/PlanningToolsScreen';
import WeatherCalendarScreen from './screens/WeatherCalendarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="CropDoctor" 
            component={CropDoctorScreen}
            options={{ title: 'Crop Doctor' }}
          />
          <Stack.Screen 
            name="Weather" 
            component={WeatherCalendarScreen}
            options={{ title: 'Weather & Calendar' }}
          />
          <Stack.Screen 
            name="Planning" 
            component={PlanningToolsScreen}
            options={{ title: 'Planning Tools' }}
          />
          <Stack.Screen 
            name="Chat" 
            component={ChatAssistantScreen}
            options={{ title: 'AI Assistant' }}
          />
          <Stack.Screen 
            name="CropDetail" 
            component={CropDetailScreen}
            options={{ title: 'Crop Details' }}
          />
          <Stack.Screen 
            name="DiseaseDetail" 
            component={DiseaseDetailScreen}
            options={{ title: 'Disease Details' }}
          />
          <Stack.Screen 
            name="Calculator" 
            component={CalculatorScreen}
            options={{ title: 'Calculator' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}