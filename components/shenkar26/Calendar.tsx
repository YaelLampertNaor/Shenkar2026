
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Calendar() {
  const [finalDate, setFinalDate] = useState("");

    const [showDatePickerVisibility, setDatePickerVisibility] = useState(false);

    const HandleConfirmDate = (date: Date) => {
        setDatePickerVisibility(false);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        dd < 10 ?
            dd = 0 + dd
            : null
        mm < 10 ?
            mm = 0 + mm
            : null
        setFinalDate(`${dd}/${mm}/${yyyy}`);
    }



    return (
        <View style={styles.container}>
            <View style={styles.first}>

                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={showDatePickerVisibility}
                    mode="date"
                    onConfirm={HandleConfirmDate}
                    onCancel={() => { console.log("onCancel Date"); }} />
            </View>
            {finalDate != "" && <Text>{finalDate}</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10 },
    first: { padding: 10 }
})
