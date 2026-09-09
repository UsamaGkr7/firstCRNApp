import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

export default function LocalStorage() {
  // Use AsyncStorage directly
  const saveData = async () => {
    await AsyncStorage.setItem("user", "John");
    const user = await AsyncStorage.getItem("user");
  };

  return (
    <View>
      <Text>LocalStorage</Text>
    </View>
  );
}
