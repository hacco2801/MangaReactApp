import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function Chapter1(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('reading_chapter', {
            url: props.item.chapter_url,
            navigation: props.navigation,
            list: props.list,
            current: props.current
        })}>
            <Text style={styles.text}>
                {props.item.chapter_name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 8,
        fontSize: 16,
        marginLeft: 12,
        marginRight: 12,
        color:"#EDEDED"
    }
});
