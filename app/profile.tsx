import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

type message = { text: string }

export default function profile({ text }: message) {
    const {msg} = useLocalSearchParams();
    return (
        <View>
            <Text>ברוך שובך, {msg}</Text>
        </View>
    )
}