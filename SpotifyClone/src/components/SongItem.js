import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SongItem = ({ song, singer, avatarURL }) => {
    return (
        <View style={styles.contentItem} >
            <Image style={styles.contentItemAvatar} source={{ uri: avatarURL }} />
            <View style={styles.contentItemInfo}>
                <Text style={styles.contentItemSong} >{song}</Text>
                <Text style={styles.contentItemSinger} >{singer}</Text>
            </View>
            <View style={styles.iconLike}>
                <FontAwesome name="heart-o" size={25} color="green" />
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
        alignItems: "center",
        justifyContent:"space-between",
        paddingHorizontal: 10,
        backgroundColor: "#222",
    },
    contentItemAvatar: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: 5
    },
    contentItemInfo: {
        flexDirection: "column",
        marginLeft:-100
    },
    contentItemSong: {
        fontSize: 25,
        color: "lightgray",
        fontWeight: "600"
    },
    contentItemSinger: {
        fontSize: 17,
        color: "lightgray",
        fontWeight: "600"
    },
    iconLike: {
        marginRight:10
    }
})

export default SongItem;
