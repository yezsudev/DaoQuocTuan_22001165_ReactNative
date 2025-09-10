import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Pressable, } from 'react-native';
import {useState} from 'react'

export default function AssetExample() {
  const [display, setDisplay] = useState("");
  const inputDigit = (a: String) => {
    setDisplay((prev)=>{
      return prev + a;
    })
  }

  const clear = () =>{
    setDisplay("");
  }

  const caculate = () =>{
    
  }

  return (
    <View style={styles.container}>
    <Text style={styles.input}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("0")}>0</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("1")}>1</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("2")}>2</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("3")}>3</TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("4")}>4</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("5")}>5</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("6")}>6</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("7")}>7</TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("8")}>8</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("9")}>9</TouchableOpacity>
        <TouchableOpacity style={[styles.btnBasic, {backgroundColor: 'green'}]} onPress={()=>caculate()}>=</TouchableOpacity>
        <TouchableOpacity style={[styles.btnBasic, {backgroundColor: 'red'}]} onPress ={()=> clear()}>C</TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("+")}>+</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("-")}>-</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("*")}>*</TouchableOpacity>
        <TouchableOpacity style={styles.btnBasic} onPress={()=> inputDigit("/")}>/</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row:{
    flexDirection: 'row'
  },
  btnBasic:{
    marginLeft: 10,
    backgroundColor: '#bfc1c3',
    width: 30,
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  input:{
    borderWidth: 1,
    marginBottom: 20,
    height: 30,
    fontWeight: 600,
  }
});
