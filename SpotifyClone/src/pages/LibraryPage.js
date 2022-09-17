import React from 'react';
import { View, StyleSheet, Image, Text, Pressable, FlatList, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import SongItem from '../components/SongItem';

const LibraryPage = ({ firstName = "Burak Akdeniz" ,navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image style={styles.imageAvatar} source={{ uri: "https://picsum.photos/id/338/200/200" }} />
                <Text style={styles.textFirstName}>{firstName}</Text>
                <Pressable onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="ios-settings-outline" size={30} color="white" />
                </Pressable>
            </View>
            <ScrollView style={styles.content} >
                <Text style={styles.contentTitle} >Liked Songs</Text>
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Sefo" song="Issabelle" avatarURL="https://picsum.photos/id/337/200/200" />
                <SongItem singer="Ezhel" song="Nerdesin" avatarURL="https://picsum.photos/id/336/200/200" />
                <SongItem singer="Martin Garrix" song="Follow" avatarURL="https://picsum.photos/id/335/200/200" />
                <SongItem singer="Tiesto" song="Hot In It" avatarURL="https://picsum.photos/id/334/200/200" />
                <SongItem singer="Uzi" song="Makine" avatarURL="https://picsum.photos/id/277/200/200" />
                <SongItem singer="Güneş" song="NKBİ" avatarURL="https://picsum.photos/id/331/200/200" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0a0a0a",
        width: "100%",
        height: "100%",
        flexDirection: "column",
    },
    header: {
        width: "100%",
        height: "15%",
        flexDirection: "row",
        backgroundColor: "#111",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingBottom: 20,
        borderBottomColor: "black",
        borderBottomWidth: 8,
        marginTop:10
    },
    imageAvatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
        bottom: -15
    },
    textFirstName: {
        color: "white",
        fontSize: 28,
        fontWeight: "700",
        left: -20
    },
    content: {
        width: "100%",
        height: "85%",
        flexDirection: "column",
        padding: 20,
    },
    contentTitle: {
        color: "lightgray",
        fontSize: 30,
        fontWeight: "bold"
    },

})

export default LibraryPage;
