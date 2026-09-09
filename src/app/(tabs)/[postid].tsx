import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const postID = () => {
  const { postId } = useLocalSearchParams();
  return (
    <View>
      <Text>postID ::: {postId}</Text>
    </View>
  );
};

export default postID;

const styles = StyleSheet.create({});
