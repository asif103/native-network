import { StyleSheet, Text, View } from "react-native";

const TweetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tweet</Text>
    </View>
  );
};
export default TweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
