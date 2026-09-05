import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const user = () => {
  const { user } = useLocalSearchParams();
  return (
    <View>
      <Text>user::::{user}</Text>
      <Link href={"/users/post/2"}>Go to Post Id</Link>
    </View>
  );
};

export default user;

const styles = StyleSheet.create({});
