import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const postid = () => {
  const { postid } = useLocalSearchParams();
  return (
    <View>
      <Text>postID ::: {postid}</Text>
    </View>
  );
};

export default postid;

const styles = StyleSheet.create({});
