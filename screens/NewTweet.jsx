import { StyleSheet, Text, View } from "react-native";

const NewTweet = () => {
  return (
    <View style={styles.container}>
      <Text>New Tweet</Text>
    </View>
  );
};
export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
