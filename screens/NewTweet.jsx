import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";
import {useState} from "react";

const NewTweet = ({navigation}) => {
    const [tweet, setTweet] = useState("")
    const sendTweet = () =>{
        navigation.navigate('Tab')
    }
    return (
        <View style={styles.container}>
            <View style={styles.tweetButtonContainer}>
                <Text style={tweet.length>250?styles.textRed:styles.textGray}>Characters left: {280-tweet.length}</Text>
                <TouchableOpacity style={styles.tweetButton} onPress={sendTweet}>
                    <Text style={styles.tweetButtonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tweetBoxContainer}>
                <Image
                    source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png'}}
                    style={styles.avatar}/>
                <TextInput
                    style={styles.input}
                    value={tweet}
                    onChangeText={setTweet}
                    placeholder={`What's happening?`}
                    placeholderTextColor={'gray'}
                    multiline
                    maxLength={280}
                />
            </View>
        </View>
    );
};
export default NewTweet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tweetButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12
    },
    tweetButton: {
        height: 40,
        backgroundColor: "#1d9bf1",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    tweetButtonText: {
        color: "#ffffff",
        paddingHorizontal: 20,
        fontWeight: "bold"
    },
    tweetBoxContainer: {
        flexDirection: "row",
        paddingHorizontal: 12
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 12,
        borderRadius: 21
    },
    input: {
        flex: 1,
    },
    textGray: {
        color: "gray"
    },
    textRed: {
        color: "red"
    },
});
