import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Detail({route ,navigation}) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={product.img}/>
      </View>
      <View>
        <Text style={{fontWeight: 700, fontSize: 16}}>{product.name}</Text>
        <Text>15% OFF {product.price}</Text><br/>
        <Text style={{fontWeight: 700, fontSize: 16}}>Description</Text><br/>
        <Text>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    height: "100%",
    borderRadius: 25
  },
  img: {
      backgroundColor: "#f6e5e3",
      width: "100%",
      height: 250,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center"
  },
});
