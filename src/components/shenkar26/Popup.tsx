import { View, StyleSheet,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Button, Snackbar } from 'react-native-paper';


export default function Popup() {
  const [visible, setVisible] = useState(true);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleSnackBar}>{visible ? 'הסתר' : 'הצג'}</TouchableOpacity>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'הבנתי',
          onPress: () => {
          },
        }}>
        הודעת פופאפ סנאקבר
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});