import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSave = async () => {
    try {
      if (!username || !password) {
        Alert.alert("Error", "Please fill in both fields");
        return;
      }

      await SecureStore.setItemAsync("username", username);
      await SecureStore.setItemAsync("password", password);
      Alert.alert("Success", "Credentials saved successfully");

      // Clear inputs after saving
      setUsername("");
      setPassword("");
    } catch (error) {
      Alert.alert("Error", "Failed to save credentials");
      console.error(error);
    }
  };

  const onShow = async () => {
    try {
      const showUsername = await SecureStore.getItemAsync("username");
      const showPassword = await SecureStore.getItemAsync("password");

      if (showUsername && showPassword) {
        Alert.alert(
          "Success",
          `Username: ${showUsername}\nPassword: ${showPassword}`,
        );
      } else {
        Alert.alert("Info", "No credentials found");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to retrieve credentials");
      console.error(error);
    }
  };

  const onClear = async () => {
    try {
      await SecureStore.deleteItemAsync("username");
      await SecureStore.deleteItemAsync("password");
      setUsername("");
      setPassword("");
      Alert.alert("Success", "Credentials cleared successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to clear credentials");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button onPress={onSave} title="Save Credentials" />
      <View style={styles.spacing} />

      <Button onPress={onShow} title="Show Credentials" />
      <View style={styles.spacing} />

      <Button onPress={onClear} title="Clear Credentials" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  spacing: {
    marginVertical: 10,
  },
});
