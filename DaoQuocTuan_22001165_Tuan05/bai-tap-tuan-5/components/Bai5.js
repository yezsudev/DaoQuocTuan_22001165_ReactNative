import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from "react"
export default function Bai5() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch("https://68ca1260430c4476c348287e.mockapi.io/img")
    .then((res) => res.json())
    .then((data) =>{
      setTimeout(()=>{
        setUsers(data);
        setLoading(false);
      }, 200)
      
    })
    .catch((err)=>{
      setLoading(false);
    });
  }, []);

  if(loading){
    return(
      <View>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.arrowleft} source={require("../assets/pngpic/ant-design_arrow-left-outlined.png")}/>
        <View style={{flex: 1}}/>
        <Text style={{color: "white", fontSize: "16px"}}>Chat</Text>
        <View style={{flex: 1}}/>
        <Image source={require("../assets/pngpic/bi_cart-check.png")}/>
      </View>
      <View style={styles.body}>
      <FlatList horizontal data={users} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <View style={styles.list}>
          <View style={styles.info}>
          <Image source={item.avtar}/>
        </View>
        )}/>
    </View>
  );
}
const styles=StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e5e5e5"
  },
  top: {
    backgroundColor: "#1ca8ff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  body: {
    marginBottom: 15,
    marginTop: 15
  },
  bottom: {
    backgroundColor: "#1ca8ff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  list:{

  }
})