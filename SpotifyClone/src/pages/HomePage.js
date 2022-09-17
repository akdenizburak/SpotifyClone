import React,{useState} from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import SongItem from '../components/SongItem';

const HomePage = () => {
    const [selectedCategory,setSelectedCategory]=useState("New Releases");
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.textHome}>Home</Text>
            </View>
            <View style={styles.middle} >
                <View style={styles.middleTop}>
                    <Text style={styles.categoriesTitle} >Playlist/Categories</Text>
                </View>
                <View style={styles.middleBottom}>
                    <CategoryItem category="New Releases" />
                    <CategoryItem category="Top 50 Turkey"/>
                    <CategoryItem category="Top Hits"/>
                    <CategoryItem category="Liked Songs"/>
                </View>
            </View>
            <ScrollView style={styles.content} >
                <Text style={styles.contentTitle} >{selectedCategory}</Text>
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Sefo" song="Issabelle" avatarURL="https://picsum.photos/id/337/200/200" />
                <SongItem singer="Ezhel" song="Nerdesin" avatarURL="https://picsum.photos/id/336/200/200" />
                <SongItem singer="Martin Garrix" song="Follow" avatarURL="https://picsum.photos/id/335/200/200" />
                <SongItem singer="Tiesto" song="Hot In It" avatarURL="https://picsum.photos/id/334/200/200" />


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
    textHome: {
        color: "white",
        fontSize: 28,
        fontWeight: "700",
    },
    middle: {
        width: "100%",
        height: "25%",

        flexDirection: "column",
        paddingHorizontal: 20,
        flexWrap: "wrap"
    },
    middleTop: {
        width:"100%",
        height:"20%",
        justifyContent:"center"
    },
    middleBottom: {
        width:"100%",
        height:"75%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignContent:"space-around"
    },
    categoriesTitle: {
        color: "lightgray",
        fontSize: 30,
        fontWeight: "bold"
    },
    content: {
        width: "100%",
        height: "65%",
        flexDirection: "column",
        padding: 20,
    },
    contentTitle: {
        color: "lightgray",
        fontSize: 30,
        fontWeight: "bold"
    },

})

export default HomePage;
