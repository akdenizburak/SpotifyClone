import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './../pages/HomePage';
import SearchPage from './../pages/SearchPage';
import { Ionicons } from '@expo/vector-icons';
import SettingsStack from './SettingsStack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? "library" : "library-outline"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          headerTintColor: "red"
        })}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Library" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};