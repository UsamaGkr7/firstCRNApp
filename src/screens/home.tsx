import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link href="/details">Go to details</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
