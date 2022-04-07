import { StyleSheet, Text, View } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
};
export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
