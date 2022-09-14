import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Octicons, Fontisto } from '@expo/vector-icons';

const ThemePage = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonDark}>
                <Text style={styles.textDark}>Dark</Text>
                <Octicons name="moon" size={30} color="white" />
            </Pressable>
            <Pressable style={styles.buttonLight}>
                <Text style={styles.textLight}>Light</Text>
                <Fontisto name="sun" size={30} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"pink",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    buttonDark: {
        width: 150,
        height:150,
        backgroundColor: "#000",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "blue",
        borderWidth: 3
    },
    textDark: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
    },
    buttonLight: {
        width: 150,
        height: 150,
        backgroundColor: "#f0f070",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "black",
        borderWidth: 3
    },
    textLight: {
        color: "black",
        fontSize: 30,
        fontWeight: "700"
    },
})

export default ThemePage;
