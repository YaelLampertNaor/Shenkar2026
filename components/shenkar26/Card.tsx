import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { flower } from '@/types/flower';

type cardProps = {
    flower: flower;
}

export default function Card({ flower }: cardProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: `${flower.image}` }} />
            <View style={styles.detailsView}>
                <View style={styles.textView}>
                    <Text>{flower.item_id}</Text>
                    <Text style={styles.text}>מס״ד: </Text>
                </View>
                <View style={styles.textView}>
                    <Text>{flower.color}</Text>
                    <Text style={styles.text}>צבע: </Text>
                </View>
                <View style={styles.textView}>
                    <Text>{flower.text ? flower.text : "אין פירוט על הצמח"}</Text>
                    <Text style={styles.text}>פירוט: </Text>
                </View>
                <View style={styles.textView}>
                    <Text>{flower.isIndoors ? "כן" : "לא"}</Text>
                    <Text style={styles.text}>צמח בית: </Text>
                </View>
                <Text style={styles.text}>מחיר: {flower.discount ? flower.price - flower.discount : flower.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", margin: 10, padding: 5 },
    img: { height: 250, width: 250, borderRadius: 10 },
    detailsView: { justifyContent: "center", alignItems: "flex-end", width: 300 },
    textView: { fontSize: 15, flexDirection: "row", },
    text: {fontWeight:"bold", marginLeft: 5, flexShrink: 1, textAlign:"right", paddingHorizontal: 5}
})