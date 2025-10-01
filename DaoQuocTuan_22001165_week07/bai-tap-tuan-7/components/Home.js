import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A premium online store for sporter and their styish choice
      </Text>
      <View style={styles.img}>
        <Image style={styles.logo} source={require('../assets/bione-removebg-preview.png')} />   
      </View>
      <View style={styles.bottom}>
        <h1 style={styles.chu}>POWER BIKE SHOP</h1>
        <Pressable style={styles.button} onPress={() => navigation.navigate('list')}>Get Started</Pressable>
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
  paragraph: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 19
  },
  img: {
    backgroundColor: "#f6e5e3",
    width: "100%",
    height: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#e94141",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "arial",
  },
  bottom: {
    textAlign: "center"
  },
  chu:{
    fontFamily: "arial",
  }
});
