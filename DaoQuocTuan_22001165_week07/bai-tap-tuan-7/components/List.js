import { Text, View, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from "react"
export default function List({navigation}) {
  const data = [
    {
      "id": "1",
      "name": "Pinarello",
      "price": 1800,
      "discount": 400,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bifour_removebg-preview.png"),
      "style": "moutain"
    },
    {
      "id": "2",
      "name": "Pina moutain",
      "price": 1700,
      "discount": 400,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bione-removebg-preview.png"),
      "style": "moutain"
    },
    {
      "id": "3",
      "name": "Pina Bike",
      "price": 1500,
      "discount": 499,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bithree_removebg-preview.png"),
      "style": "roadbike"
    },
    {
      "id": "4",
      "name": "Pinarello",
      "price": 1900,
      "discount": 500,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bitwo-removebg-preview.png"),
      "style": "roadbike"
    },
    {
      "id": "5",
      "name": "Pinarello",
      "price": 2700,
      "discount": 400,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bithree_removebg-preview.png"),
      "style": "roadbike"
    },
    {
      "id": "6",
      "name": "Pinarello",
      "price": 1350,
      "discount": 400,
      "description": "It is a very important from of writing as we write almost everything in paragraphs, be it an answer, essay, story, email, etc.",
      "img": require("../assets/bione-removebg-preview.png"),
      "style": "moutain"
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <h2 style={{color: "#ca4b4a"}}>The world's best bike</h2>
        
      </View>
      <View>
        <FlatList numColumns={2} data={data} keyExtractor={(item) => item.id} renderItem = {({item}) => (
          <View style={styles.list}>
            <Pressable onPress={() => navigation.navigate('detail', {product: item})}>
              <View style={styles.item} on>
                <Image source={item.img} style={{width: 80, height: 70}}/>
                <Text style={{marginTop: 10, fontSize: 15}}>{item.name}</Text>
                <Text style={{marginTop: 10, fontSize: 16}}>${item.price}</Text>
              </View>
            </Pressable> 
          </View>
        )}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "white",
    height: "100%",
    borderRadius: 25
  },
  list: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: "#f6e5e3",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 170,
    width: 130
  },
});
