import React,{useState} from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
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
                    <Pressable style={styles.categoryItem}>
                        <Text style={styles.textCategoryItem}>New Releases</Text>
                    </Pressable>
                    <Pressable style={styles.categoryItem}>
                        <Text style={styles.textCategoryItem}>Top Chart Turkey</Text>
                    </Pressable>
                    <Pressable style={styles.categoryItem}>
                        <Text style={styles.textCategoryItem}>Liked Your</Text>
                    </Pressable>
                    <Pressable style={styles.categoryItem}>
                        <Text style={styles.textCategoryItem}>Popular Europe</Text>
                    </Pressable>
                </View>

            </View>
            <ScrollView style={styles.content} >
                <Text style={styles.contentTitle} >{selectedCategory}</Text>
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
                <SongItem singer="Yalın" song="Ki Sen" avatarURL="https://picsum.photos/id/339/200/200" />
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
        borderBottomWidth: 8
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
        left: -20
    },
    middle: {
        width: "100%",
        height: "20%",
        borderBottomColor: "black",
        borderBottomWidth: 10,
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
        height:"80%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        alignContent:"space-around"
    },
    categoriesTitle: {
        color: "lightgray",
        fontSize: 30,
        fontWeight: "bold"
    },
    categoryItem: {
        width: "47%",
        height: 55,
        backgroundColor: "#222aaa",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    textCategoryItem: {
        color:"white",
        fontSize:18,
        fontWeight:"700",
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
