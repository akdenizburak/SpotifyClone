import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';

const EditPage = ({ navigation }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");

    const handleSave = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{
                    uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png',
                }} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.textFirstname}>First Name</Text>
                <TextInput style={styles.inputFirstname} placeholder="First Name" placeholderTextColor={"gray"} value={firstname} onChangeText={setFirstname} />
                <Text style={styles.textLastname}>Last Name</Text>
                <TextInput style={styles.inputLastname} placeholder="Last Name" placeholderTextColor={"gray"} value={lastname} onChangeText={setLastname}  />
                <Text style={styles.textUsername}>User Name</Text>
                <TextInput style={styles.inputUsername} placeholder="User Name" placeholderTextColor={"gray"} value={username} onChangeText={setUsername} />
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.buttonSave} onPress={handleSave} >
                    <Text style={styles.textSıgnUp}>SAVE</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },
    header: {
        width: "100%",
        height: "30%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: "70%",
        height: "50%",
        resizeMode: "contain",
        padding: 60
    },
    middle: {
        width: "100%",
        height: "30%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


    },
    textFirstname: {
        fontWeight: "700",
        fontSize: 25,
        left: -70,
        color: "white"

    },
    textLastname: {
        fontWeight: "700",
        fontSize: 25,
        left: -70,
        color: "white"
    },
    textUsername: {
        fontWeight: "700",
        fontSize: 25,
        left: -70,
        color: "white"
    },
    inputFirstname: {
        width: "70%",
        height: "22%",
        borderColor: "lightgray",
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 23,
        paddingLeft: 20,
        marginVertical: 10,
        color: "white"

    },
    inputLastname: {
        width: "70%",
        height: "22%",
        borderColor: "lightgray",
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 23,
        paddingLeft: 20,
        marginVertical: 10,
        color: "white"

    },
    inputUsername: {
        width: "70%",
        height: "22%",
        borderColor: "lightgray",
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 23,
        paddingLeft: 20,
        marginVertical: 10,
        color: "white"

    },
    footer: {
        width: "100%",
        height: "40%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    buttonSignIn: {
        width: "70%",
        height: "18%",
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 30,
        fontSize: 23,
        backgroundColor: "lightgray",
        justifyContent: "center",
        flexDirection: "column",
    },
    buttonSave: {
        width: "70%",
        height: "18%",
        borderRadius: 30,
        fontSize: 23,
        marginVertical: 10,
        backgroundColor: "#1eb955",
        justifyContent: "center",
        bottom: 70

    },
    textSıgnIn: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    textAccount: {
        fontSize: 23,
        fontWeight: "700",
        marginVertical: 10
    },
    textSıgnUp: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default EditPage;
