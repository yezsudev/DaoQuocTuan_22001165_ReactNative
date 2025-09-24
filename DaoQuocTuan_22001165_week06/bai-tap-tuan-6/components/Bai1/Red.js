import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Red({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("../../assets/phonecolor/vs_red.png")} style={{width: "200px", height: "250px"}}/>
      </View> 
      <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flexDirection: "row"}}>
        <Image source={require("../../assets/star.png")}/>
        <Image source={require("../../assets/star.png")}/>
        <Image source={require("../../assets/star.png")}/>
        <Image source={require("../../assets/star.png")}/>
        <Image source={require("../../assets/star.png")}/>
        <Text style={{marginLeft: 25}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection: "row", columnGap: 50}}>
        <Text style={{fontWeight: 700, fontSize: 16}}>1.790.000 đ</Text>
        <Text style={{color: "gray", fontSize: 13,textDecorationLine: "line-through"}}>1.790.000 đ</Text>
      </View>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <Text style={{fontWeight: 700, color: "red", fontSize: 11, marginRight: 5}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require("../../assets/cham_hoi.png")} style={{width: "17px", height: "17px"}}/>
      </View>
      <Pressable style={styles.select} onPress={() => navigation.navigate('select')}>4 MÀU-CHỌN LOẠI</Pressable>
      <Pressable style={styles.buy}>CHỌN MUA</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    width: "100%",
    height:"auto",
    rowGap: 15
  },
  select:{
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    height: "35px",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "arial",
  },
  buy: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    height: "40px",
    fontFamily: "arial",
    fontWeight: "700"
  }
});
