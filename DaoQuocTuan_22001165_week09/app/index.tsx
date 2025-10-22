import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/home", params: { name } })}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#fff" 
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#7A63FF", 
    marginBottom: 40 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, 
    width: "80%", 
    padding: 10, 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: "#7A63FF", 
    padding: 12, 
    borderRadius: 10 
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "600" 
  },
});
