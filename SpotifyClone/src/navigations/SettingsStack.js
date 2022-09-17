import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryPage from '../pages/LibraryPage';
import SettingsPage from './../pages/SettingsPage';
import ThemePage from './../pages/ThemePage';
import EditPage from './../pages/EditPage';


const Stack = createNativeStackNavigator();

export const SettingsStack=()=>{
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Library" component={LibraryPage} />
                <Stack.Screen name="Settings" component={SettingsPage} />
                <Stack.Screen name="Theme" component={ThemePage} />
                <Stack.Screen name="Edit" component={EditPage} />
            </Stack.Navigator>
    );
};