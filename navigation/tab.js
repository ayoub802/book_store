import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import { icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "100%",
        backgroundColor: COLORS.black
    }
}

const Tabs = () => {
  return (
    <Tab.Navigator
     tabOptions={tabOptions}
     screenOptions={({route}) => ({
        tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.lightGreen : COLORS.gray;

            switch (route.name) {
                case "Home" : 
                    return (
                        <Image 
                        source={icons.dashboard_icon}
                        resizeMode='contain'
                        style={{
                            tintColor: tintColor,
                            width: 25,
                            height: 25
                        }}
                        />
                    )
                case "Search" : 
                    return (
                        <Image 
                        source={icons.search_icon}
                        resizeMode='contain'
                        style={{
                            tintColor: tintColor,
                            width: 25,
                            height: 25
                        }}
                        />
                    )
                case "Notification" : 
                    return (
                        <Image 
                        source={icons.notification_icon}
                        resizeMode='contain'
                        style={{
                            tintColor: tintColor,
                            width: 25,
                            height: 25
                        }}
                        />
                    )
                case "Setting" : 
                    return (
                        <Image 
                        source={icons.menu_icon}
                        resizeMode='contain'
                        style={{
                            tintColor: tintColor,
                            width: 25,
                            height: 25
                        }}
                        />
                    )
            }
        }
     })}

    >
        <Tab.Screen name='Home' options={{ headerShown: false}} component={HomeScreen}/>
        <Tab.Screen name='Search' component={HomeScreen}/>
        <Tab.Screen name='Notification' component={HomeScreen}/>
        <Tab.Screen name='Setting' component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs