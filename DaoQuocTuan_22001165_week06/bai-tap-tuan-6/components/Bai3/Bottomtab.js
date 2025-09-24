import  React, {useState, useEffect}from 'react';
import { Text, View, ActivityIndicator, FlatList, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>🔍 Search Screen</Text>
      <TextInput placeholder="Nhập từ khóa" style={{width: 200, height: 40,borderRadius: 10, borderWidth: 1, backgroundColor: "white"}}/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/star.png')}/>
      <Text style={{ fontSize: 20 }}>Đào Quốc Tuấn</Text>
    </View>
  );
}



function HomeTabs() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <View>
    <View style={styles.body}>
        <FlatList data={users} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <View style={styles.list}>
              <View style={styles.info}>
                <Text style={{fontWeight: 700}}>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
              <View style={{flex: 1}}/>
            </View>
          )}/>
      </View>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();

export default function Bai3() {
  
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <BottomTab.Screen name="Home" component={HomeTabs} />
        <BottomTab.Screen name="Search" component={SearchScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
