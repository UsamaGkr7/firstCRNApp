import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const segment = () => {
  const { segment } = useLocalSearchParams<{ segment: string[] }>();
  return (
    <View>
      <Text>segment::::{segment}</Text>
    </View>
  );
};

export default segment;

const styles = StyleSheet.create({});
