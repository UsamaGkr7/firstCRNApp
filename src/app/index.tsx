import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Index = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://picsum.photos/200",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />

      <TextInput
        placeholder="Enter Your Name"
        style={{
          borderWidth: 1,
          padding: 10,
          width: 250,
        }}
      />

      <Pressable onPress={() => alert("Alerttttt")}>
        <Text style={styles.Text}>hey</Text>
      </Pressable>

      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.picture.large }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
  },
});
