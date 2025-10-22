import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task, useTasks } from "../hooks/useTasks";

export default function HomeScreen() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  const { list, toggleDone, remove } = useTasks();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState("");

  const load  = useCallback (async()=>{
    const data = await list(query);
    setTasks(data)
  }, [list, query]);

  useFocusEffect(
    useCallback(()=>{
        load();
    }, [load])
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi {name || "User"} 👋</Text>
      <Text style={styles.subHeader}>Have a great day ahead</Text>

      <TextInput placeholder="Search" 
        style={styles.search} 
        value={query} 
        onChangeText={(t) => setQuery(t)}
        onSubmitEditing={load}/>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity 
                onPress={async()=>{
                    await toggleDone(item.id, item.done ? 0 : 1);
                    await load();
                }}
                 style={[styles.check, item.done ? styles.checkOn : null]}/>
            <Text style={[styles.taskTitle]}>{item.title}</Text>
            <TouchableOpacity onPress={() => router.push({ pathname: "/add", params: { editId: item.id, title: item.title } })}>
              <Ionicons name="create-outline" size={20} color="#7A63FF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => { await remove(item.id); load(); }} style={{ marginLeft: 12 }}>
              <Ionicons name="trash-outline" size={20} color="#f44336" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: "center", color: "#777", marginTop: 20 }}>No tasks</Text>}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/add")}>
        <Ionicons name="add" size={30} color="#fff" />+
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 20 
},
  header: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginTop: 40 },
  subHeader: { 
    color: "#777", 
    marginBottom: 20 
},
  search: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 10 
},
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  fab: {
    backgroundColor: "#7A63FF",
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  check: {
    width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: "#7A63FF",
    marginRight: 10, backgroundColor: "transparent",
  },
  taskTitle: { 
    flex: 1, 
    fontSize: 15 
},
  taskDone: { 
    textDecorationLine: "line-through", 
    color: "#888" 
},
checkOn: { backgroundColor: "#7A63FF" },
});
