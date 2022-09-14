import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const CategoryItem = ({category}) => {
    return (
            <Pressable style={styles.categoryItem}>
                <Text style={styles.textCategoryItem}>{category}</Text>
            </Pressable>
    );
}

const styles = StyleSheet.create({
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
})

export default CategoryItem;
