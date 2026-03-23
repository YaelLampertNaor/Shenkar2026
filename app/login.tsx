import Popup from '@/components/shenkar26/Popup';
import React, {useState} from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import {useRouter} from 'expo-router'

const router = useRouter();


export default function login() {
  const [msg, setMsg] = useState("");
  const [showPop, setShowPop] = useState(false);

  const click = () => {
    msg === "" ?
      setShowPop(true)
      :
      router.push({pathname:'/profile', params:{msg}})
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <TextInput placeholder="הודעה" onChangeText={(t) => setMsg(t) }></TextInput>
      </View>
      <Button title="שליחת ההודעה" onPress={() => {click()}} />
        {/* <Text>{msg}</Text> */}

        {showPop && <Popup message={"יש למלא את כל השדות"}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems:"center", marginTop: 70 },
  firstView: { width: 250, height: 200, backgroundColor: "#e3e3e3", alignItems: "center", justifyContent:"center", margin: 10, borderRadius:15 }

})