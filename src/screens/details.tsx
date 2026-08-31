import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const details = () => {
  const { userId, name } = useLocalSearchParams();
  return (
    <View>
      <Text>details</Text>
      <Link href="/profile">Go to profile</Link>
      <Text>{userId}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({});
