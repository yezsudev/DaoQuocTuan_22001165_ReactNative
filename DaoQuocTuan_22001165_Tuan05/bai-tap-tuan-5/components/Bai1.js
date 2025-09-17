import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

export default function Bai1() {
  const data =[
    {id: 1, name: "Ca nấu mì mini", img: require("../assets/imgProduct/ca_nau_lau.png"), shop: "Devang"},
    {id: 2, name: "1KG KHÔ GÀ BƠ TỎI", img: require("../assets/imgProduct/ga_bo_toi.png"), shop: "LTD Food"},
    {id: 3, name: "Xe cần cẩu đa năng", img: require("../assets/imgProduct/xa_can_cau.png"), shop: "Thế giới đồ chơi"},
    {id: 4, name: "Đồ chơi dạng mô hình", img: require("../assets/imgProduct/do_choi_dang_mo_hinh.png"), shop: "Thế giới đồ chơi"},
    {id: 5, name: "Lãnh đạo đơn giản", img: require("../assets/imgProduct/lanh_dao_gian_don.png"), shop: "Minh Long Book"},
    {id: 6, name: "Hiểu lòng trẻ con", img: require("../assets/imgProduct/hieu_long_con_tre.png"), shop: "Minh Long Book"},
    {id: 7, name: "Donald Trump thiên tài lãnh đạo", img: require("../assets/imgProduct/trump_1.png") , shop: "Minh Long Book"}
  ]
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
      <Text style={{padding: 15, fontSize: "12px", borderBottomColor: "#c9c9c9", borderBottomWidth: 1,}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      <FlatList  data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <View style={styles.list}>
        <Image source={item.img}/>
        <View style={styles.info}>
        <Text>{item.name}</Text>
        <Text>Shop {item.shop}</Text>
        </View>
        <View style={{flex: 1}}/>
        <TouchableOpacity style={styles.btnChat}>Chat</TouchableOpacity>
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
  top: {
    backgroundColor: "#1ca8ff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
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
    flexDirection: "row",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 1,
    
  },
  info: {
    marginTop: 20,
    marginLeft: 10
  },
  btnChat:{
    backgroundColor: "red",
    color: "white",
    width: "70px",
    height: "40px",
    marginRight: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
