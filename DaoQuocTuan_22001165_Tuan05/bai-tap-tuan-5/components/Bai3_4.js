import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from "react"
export default function Bai3() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
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
          <Text style={{fontWeight: 700}}>{item.name}</Text>
          <Text>{item.email}</Text>
          </View>
          <View style={{flex: 1}}/>
          </View>
        )}/>
        </View>
        <View style={styles.bottom}>
          <Image style={styles.arrowleft} source={require("../assets/pngpic/Group_10.png")}/>
          <View style={{flex: 1}}/>
          <Image source={require("../assets/pngpic/Vector_(Stroke).png")}/>
          <View style={{flex: 1}}/>
          <Image source={require("../assets/pngpic/Vector_1_(Stroke).png")}/>
        </View>
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