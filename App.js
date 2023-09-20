import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Tabs from './navigation/tab';
import BookDetail from './screens/BookDetail';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light'/>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='BookDetail' component={BookDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


