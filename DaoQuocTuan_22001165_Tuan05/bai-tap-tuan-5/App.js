import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3_4'
import Bai5 from './components/Bai5'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Bai5/>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

});
