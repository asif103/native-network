import {Button, FlatList, Platform, StyleSheet, Text, TouchableOpacityComponent, View} from "react-native";
import {Image, TouchableOpacity} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    const DATA = [
        {
            id: 1,
            title: "title one"

        },
        {
            id: 2,
            title: "title two"

        },
        {
            id: 3,
            title: "title Three"

        },
        {
            id: 4,
            title: "title four"

        },
        {
            id: 5,
            title: "title five"

        },
        {
            id: 6,
            title: "title six"

        },
        {
            id: 7,
            title: "title seven"

        },
        {
            id: 8,
            title: "title eight"

        },
        {
            id: 9,
            title: "title nine"

        },
        {
            id: 10,
            title: "title ten"

        }
    ];
    const goToProfile = () => {
        navigation.navigate('Profile Screen')
    }
    const goToSingleTweet = () => {
        navigation.navigate('Tweet Screen')
    }
    const goToNewTweet = () => {
        navigation.navigate("New Tweet")
    }
    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={goToProfile}>

                <Image
                    source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png'}}
                    style={styles.avatar}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.flexRow} onPress={goToProfile}>

                    <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@username</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={goToSingleTweet}>
                    <Text style={styles.tweetContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur cupiditate dolorem esse, harum ipsum magnam magni tempora tenetur velit
                        veniam.</Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" />
                        <Text style={styles.textGray}>150</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" />
                        <Text style={styles.textGray}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" />
                        <Text style={styles.textGray}>10,450</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios'?'share-apple':'share-google'} size={22} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=><View style={styles.ItemSeparator}/>}
            />
            {/*<Button*/}
            {/*  title={"create new tweet"}*/}
            {/*  onPress={() => navigation.navigate("New Tweet")}*/}
            {/*/>*/}
            <TouchableOpacity style={styles.floatingButton} onPress={goToNewTweet}>
                <AntDesign name="pluscircle" size={50} color="#1d9bf1" />
            </TouchableOpacity>
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flexRow: {
        flexDirection: "row",

    },
    tweetContainer: {
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 12,
        borderRadius: 21
    },
    tweetName: {
        fontWeight: "bold",
        color: "#222222"
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: "gray"
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 20
    },
    tweetEngagement: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12
    },
    textGray: {
        color: "gray"
    },
    ml4:{
        marginLeft:4
    },
    ItemSeparator:{
        backgroundColor:"#ddd",
        height:1,
        width:"100%"

    },
    floatingButton:{
        position:"absolute",
        bottom:20,
        right:10
    }

});
