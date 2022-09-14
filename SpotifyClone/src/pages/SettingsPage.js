import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SettingsPage = ({avatarURL="https://picsum.photos/id/338/200/200"}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{uri:avatarURL}}/>
            </View>
            <View style={styles.middle}>
                <Pressable style={styles.buttonTheme}>
                    <Text style={styles.textTheme}>Theme</Text>
                    <MaterialCommunityIcons name="theme-light-dark" size={35} color="white" />
                </Pressable>
                <Pressable style={styles.buttonEdit}>
                    <Text style={styles.textEdit}>Edit Profile</Text>
                    <FontAwesome5 name="user-edit" size={26} color="white" />
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.buttonLogout}>
                    <Text style={styles.textLogout}>Log Out</Text>
                    <Ionicons name="ios-exit" size={30} color="white" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#101",
        flexDirection: "column",
    },
    header: {
        height: "40%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    middle: {
        height: "30%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    buttonTheme: {
        width: "50%",
        height: 80,
        backgroundColor: "blue",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    },
    textTheme: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
    },
    buttonEdit: {
        width: "50%",
        height: 80,
        backgroundColor: "purple",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    },
    textEdit: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
    },
    footer: {
        height: "30%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    buttonLogout: {
        width: "50%",
        height: 80,

        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    },
    textLogout: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
    },
})

export default SettingsPage;
