import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const SongItem = ({song,singer,avatarURL}) => {
    return (
        <View style={styles.contentItem} >
            <Image style={styles.contentItemAvatar} source={{ uri: avatarURL }} />
            <View style={styles.contentItemInfo}>
                <Text style={styles.contentItemSong} >{song}</Text>
                <Text style={styles.contentItemSinger} >{singer}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentItem: {
        marginVertical: 5,
        width: "100%",
        height: 80,
        borderRadius: 7,
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal:10,
        backgroundColor: "#222",
    },
    contentItemAvatar: {
        backgroundColor: "white",
        width:60,
        height:60,
        borderRadius:5
    },
    contentItemInfo:{
        flexDirection:"column",
        paddingLeft:20
    },
    contentItemSong: {
        fontSize:25,
        color:"lightgray",
        fontWeight:"600"
    },
    contentItemSinger: {
        fontSize:17,
        color:"lightgray",
        fontWeight:"600"
    },
})

export default SongItem;
