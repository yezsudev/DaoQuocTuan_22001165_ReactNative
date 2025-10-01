import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home'
import List from "./components/List"
import Detail from './components/Detail'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator> 
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="list" component={List}/>
        <Stack.Screen name="detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
