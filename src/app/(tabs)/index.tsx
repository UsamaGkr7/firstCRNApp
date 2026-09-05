import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Link href="/detailssss">Go to details</Link>
      <Link href={"/users/1"}>Go to Post Id</Link>
      <Link href={"/admin/users/path"}>Go to Post Id</Link>
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
