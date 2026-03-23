// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import React from 'react';
// import { useColorScheme } from 'react-native';

// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />
//       <AppTabs />
//     </ThemeProvider>
//   );
// }


//דוגמא 2
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
        <Tabs screenOptions={{ headerShown: false, }}>
            <Tabs.Screen name="index" options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color="#1F1F1F" />, title: 'בית' }} />
            <Tabs.Screen name="explore" options={{ tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color="#1F1F1F" />, title: 'מערכת' }} />
            {/* <Tabs.Screen name="login" options={{ tabBarIcon: ({ color }) => <Ionicons name="calendar" size={30} color="#1F1F1F" />, title: 'לוגין' }} /> */}
        </Tabs>
    );
}


