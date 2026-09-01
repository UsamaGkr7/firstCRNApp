import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
