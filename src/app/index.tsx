import Home from "@/screens/home";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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

  return <Home />;
};

export default Index;

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
  },
});
