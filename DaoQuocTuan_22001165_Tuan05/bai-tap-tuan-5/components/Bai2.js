import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TextInput} from 'react-native';

export default function Bai2() {
  const data =[
    {id: 1, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/daucam.png")},
    {id: 2, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/carbusbtops2.png")},
    {id: 3, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/dauchuyendoi.png")},
    {id: 4, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/dauchuyendoipsps2.png")},
    {id: 5, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/daynguon.png")},
    {id: 6, name: "Cáp chuyển từ cổng USB sang PS2", img: require("../assets/imgProduct2/giacchuyen.png")},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.arrowleft} source={require("../assets/pngpic/ant-design_arrow-left-outlined.png")}/>
        <View style={{flex: 1}}/>
        <TextInput style={styles.textInput} placeholder="Dây cáp usb" placeholderTextColor= "#c9c9c9"/>
        <View style={{flex: 1}}/>
        <Image source={require("../assets/pngpic/bi_cart-check.png")}/>
      </View>
      <View style={styles.body}>
      <FlatList numColumns={2} data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <View style={styles.list}>
          <Image source={item.img}/>
          <View style={styles.info}>
            <Text>{item.name}</Text>
            <View style={{flex: 1}}/>
            <Image source={require("../assets/pngpic/Group5.png")}/>
            <View style={styles.row}>
              <Text style={styles.bold}>69.900 đ</Text>
              <Text style={{fontSize: "12px", color: "gray", marginLeft: "20px"}}>-39%</Text>
            </View>
          </View>
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
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e5e5e5"
  },
  row:{
    flexDirection: "row"
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
  textInput:{
    backgroundColor: "white",
    paddingLeft: 10
  },
  info:{
    width: "90%",
    alignSelf: "center"
  },
  bottom: {
    backgroundColor: "#1ca8ff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  list: {
    flex: 1,
    padding: 10,
  },
  bold: {
    fontWeight: 700
  }
})