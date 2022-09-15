import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import CategoryItem from './../components/CategoryItem';

import { Ionicons } from '@expo/vector-icons';


const SearchPage = () => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        isSearch ?
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.textSearch}>Search Music</Text>
                    <View style={styles.containerSearch}>
                        <Ionicons onPress={() => setIsSearch(false)} name="ios-arrow-back-circle" size={33} color="white" />
                        <TextInput style={styles.textInputSearch} placeholder='Search' placeholderTextColor={"gray"} />
                    </View>
                </View>
                <View style={styles.middle} >
                    <View style={styles.middleTop}>
                        <Text style={styles.genresTitle} >Your Searching Music..</Text>
                    </View>
                    <View style={styles.middleBottom}>

                    </View>
                </View>
            </View>
            :
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.textSearch}>Search</Text>
                    <TextInput onFocus={() => setIsSearch(true)} style={styles.textInputSearch} placeholder='Search Music' />
                </View>
                <View style={styles.middle} >
                    <View style={styles.middleTop}>
                        <Text style={styles.genresTitle} >Genres</Text>
                    </View>
                    <View style={styles.middleBottom}>
                        <CategoryItem category="New Releases" />
                        <CategoryItem category="Top 50 Turkey" />
                        <CategoryItem category="Top Hits" />
                        <CategoryItem category="Liked Songs" />
                    </View>
                </View>
            </View>
    )
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
        alignItems: "center",
        justifyContent: "flex-end"
    },
    containerSearch:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly"
    },
    textSearch: {
        color: "white",
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 5
    },
    textInputSearch: {
        width: "75%",
        height: 35,
        backgroundColor: "#333",
        borderRadius: 15,
        color: "white",
        fontSize: 25,
        fontWeight: "500",
        paddingLeft: 20,
        marginBottom: 10,
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
        width: "100%",
        height: "25%",
        justifyContent: "center",
    },
    middleBottom: {
        width: "100%",
        height: "75%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-between",
    },
    genresTitle: {
        color: "lightgray",
        fontSize: 30,
        fontWeight: "bold"
    },
})

export default SearchPage;
