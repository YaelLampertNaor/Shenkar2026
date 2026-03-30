import { View, StyleSheet } from 'react-native'
import React from 'react'
import Calendar from '@/components/shenkar26/Calendar';

export default function calendarScreen() {
    return(
        <View style={styles.container}>
            <Calendar/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10 },
})