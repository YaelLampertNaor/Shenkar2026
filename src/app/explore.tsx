import Popup from '@/components/shenkar26/Popup';
import PopupModal from '@/components/shenkar26/PopupModal';
import React, { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function explore() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const[showPopup, setShowPopup] = useState(false)
  const[showPopupModal, setShowPopupModal] = useState(false)

  return (
    <ScrollView>
      <Text style={styles.title}>חנות הפרחים של שנקר 2026</Text>
      <View style={styles.second}>
        <TouchableOpacity onPress={()=>{Alert.alert("כותרת 1", "טקסט 1")}}>
          <Image source={require('../../assets/images/flower1.jpg')} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Alert.alert("כותרת 2", "טקסט 2")}}>
          <Image source={require('../../assets/images/flower2.jpg')} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setShowPopupModal(true)}>
          <Image source={require('../../assets/images/flower3.jpg')} style={styles.img} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{Alert.alert("כותרת 4", "טקסט 4")}}>
          <Image source={require('../../assets/images/flower4.jpg')} style={styles.img} />
        </TouchableOpacity>

      </View>

      <View>
        <TextInput
          placeholder="פלייסהולדר"
          onChangeText={newText => setText(newText)}/>

        <Button title="לחץ" onPress={() => setShowPopup(true)} />

          {showPopupModal && <PopupModal show={true}/>}
          {showPopup && <Popup/>}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  img: { height: 250, width: 250, margin: 5 },
  addPic: { height: "60%", width: "50%", borderRadius: 10 },
  title: { fontSize: 26, alignSelf:"center", marginTop:10 },
  first: { backgroundColor: "blue", flexDirection: "row", height: 250, },
  second: { flexDirection: "column", backgroundColor: "#e3e3e3", alignItems: "center" },
})