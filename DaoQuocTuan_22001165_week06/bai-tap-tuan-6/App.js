import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


// or any files within the 
import Blue from './components/Bai1/Blue'
import Black from './components/Bai1/Black'
import Silver from './components/Bai1/Silver'
import Red from './components/Bai1/Red'
import SelectColor from './components/Bai1/SelectColor'
import Bai3 from './components/Bai3/Bottomtab'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator> 
        <Stack.Screen name="blue" component={Blue}/>
        <Stack.Screen name="red" component={Red}/>
        <Stack.Screen name="black" component={Black}/>
        <Stack.Screen name="silver" component={Silver}/> 
        <Stack.Screen name="select" component={SelectColor}/>
      </Stack.Navigator>
    </NavigationContainer>
    //<Bai3/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
