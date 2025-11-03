import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="crop-detail" 
          options={{ 
            title: "Crop Details",
            presentation: 'modal',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="disease-detail" 
          options={{ 
            title: "Disease Details",
            presentation: 'modal',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="calculator" 
          options={{ 
            title: "Calculator",
            presentation: 'modal',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff'
          }} 
        />
      </Stack>
    </>
  );
}