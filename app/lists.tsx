import { View, FlatList } from 'react-native'
import React from 'react'
import { flowers } from '../data/flowers'
import Card from '@/components/shenkar26/Card'

export default function lists() {
    return (
        <View>
            <FlatList
                data={flowers}
                renderItem={({ item }) => <Card flower={item} />}
                keyExtractor={(item) => item.item_id}
            />
        </View>
    )
}