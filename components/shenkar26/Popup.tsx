import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Snackbar } from 'react-native-paper';

type text = { message: string }

export default function Popup({ message }: text) {
  const [visible, setVisible] = useState(true);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleSnackBar}><Text>{visible ? 'הסתר' : 'הצג'}</Text></TouchableOpacity>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'הבנתי',
          onPress: () => {
          },
        }}>
        <Text style={styles.text}>
         {message}
         </Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: { color: "white" }
});