import { useTasks } from "@/hooks/useTasks";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddTaskScreen() {
  const router = useRouter();
  const { create, updateTitle } = useTasks();
  const params = useLocalSearchParams<{ editId?: string; title?: string }>();

  const isEdit = !!params?.editId;
  const [job, setJob] = useState(params?.title ? String(params.title) : "");

  useEffect(() => {
    if (params?.title) setJob(String(params.title));
  }, [params?.title]);

  const onFinish = async () => {
    if (!job.trim()) {
      Alert.alert("Validation", "Please enter a job title");
      return;
    }
    if (isEdit) {
      await updateTitle(Number(params.editId), job.trim());
    } else {
      await create(job.trim());
    }
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isEdit ? "EDIT YOUR JOB" : "ADD YOUR JOB"}</Text>
      <TextInput
        placeholder="Input your job"
        style={styles.input}
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity style={styles.button} onPress={onFinish}>
        <Text style={styles.buttonText}>{isEdit ? "SAVE →" : "FINISH →"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#fff", 
    paddingHorizontal: 16 
},
  header: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 30 
},
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, width: "100%", 
    padding: 12, 
    marginBottom: 20 
},
  button: { 
    backgroundColor: "#7A63FF", 
    paddingVertical: 12, 
    paddingHorizontal: 18, 
    borderRadius: 10 
},
  buttonText: { 
    color: "#fff", 
    fontWeight: "600" 
},
});
