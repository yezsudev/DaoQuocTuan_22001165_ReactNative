import { Text, View, StyleSheet, Image, Pressable, Touchable, Button } from 'react-native';
import React, {useState, useEffect} from "react"
export default function SelectColor({navigation}) {
  const [color, setColor] = useState("")
  const mau = (a: String) => {
    setColor(a);
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", columnGap: 20, backgroundColor: "white", padding: 15}}>
        <Image source={require("../../assets/phonecolor/vs_blue.png")} style={{width: "80px", height: "100px"}}/>
        <View>
          <Text>Điện thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
          <Text>Màu: {color}</Text>
          <Text>Cung cấp bởi Tiki Tradding</Text>
          <Text>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>Chọn một màu bên dưới</Text>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Pressable onPress={() => mau("silve")} style={[styles.colorselect, {backgroundColor: "#e3d8de"}]}></Pressable>
          <Pressable onPress={() => mau("red")} style={[styles.colorselect, {backgroundColor: "red"}]}></Pressable>
          <Pressable onPress={() => mau("black")} style={[styles.colorselect, {backgroundColor: "black"}]}></Pressable>
          <Pressable onPress={() => mau("blue")} style={[styles.colorselect, {backgroundColor: "#254797"}]}></Pressable>
        </View>
        <Pressable onPress={()=> navigation.navigate({color})} style={styles.done}>XONG</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"auto",
  },
  colorselect:{
    marginBottom: 15,
    width: "70px",
    height: "70px",
  },
  body: {
    padding: 10,
    rowGap: 20
  },
  done: {
    backgroundColor: "#254797", 
    color: 'white', 
    height: "40px", 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 600,
    fontFamily: "arial"
  }
});
