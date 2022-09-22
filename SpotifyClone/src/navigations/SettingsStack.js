import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryPage from '../pages/LibraryPage';
import SettingsPage from './../pages/SettingsPage';
import ThemePage from './../pages/ThemePage';
import EditPage from './../pages/EditPage';


const Stack = createNativeStackNavigator();

export default SettingsStack=()=>{
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="LibraryPage" component={LibraryPage} />
                <Stack.Screen name="Settings" component={SettingsPage} />
                <Stack.Screen name="Theme" component={ThemePage} />
                <Stack.Screen name="Edit" component={EditPage} />
            </Stack.Navigator>
    );
};