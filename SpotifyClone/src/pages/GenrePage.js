import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SongItem from '../components/SongItem';

const GenrePage = ({genre="Top Hits"}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.textTitle}>{genre}</Text>
            </View>
            <View style={styles.content} >
                <SongItem singer={"Müslüm Gürses"} song={"Sigara"} />
            </View>
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
        flexDirection: "column",
        backgroundColor: "#111",
        borderBottomColor: "black",
        borderBottomWidth: 8,
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle: {
        color: "white",
        fontSize: 28,
        fontWeight: "700",
        bottom:-20
    },
    content: {
        width: "100%",
        height: "850%",
        flexDirection: "column",
        paddingHorizontal: 20,
        flexWrap: "wrap"
    },
})

export default GenrePage;
