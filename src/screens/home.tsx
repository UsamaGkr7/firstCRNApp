// import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  //   const naviagtion = useNavigation();
  return (
    <View style={{ backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>home</Text>
      <Link
        href={{
          pathname: "/details",
          params: { userId: "123", name: "Alice" },
        }}
      >
        Go to details
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
