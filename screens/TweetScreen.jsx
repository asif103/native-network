import {Image, StyleSheet, Text, View, TouchableOpacity, Platform} from "react-native";
import {Entypo, EvilIcons} from '@expo/vector-icons';

const TweetScreen = ({navigation}) => {
    const goToProfile = () => {
        navigation.navigate('Profile Screen')
    }
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow} onPress={goToProfile}>
                    <Image
                        source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png'}}
                        style={styles.avatar}/>
                    <View>
                        <Text numberOfLines={1} style={styles.tweetName}>User Name</Text>
                        <Text numberOfLines={1} style={styles.tweetHandle}>@username</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={20} color="gray"/>
                </TouchableOpacity>
            </View>
            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur ipsam itaque iusto non,
                    qui quo totam veritatis voluptatum. Aliquam beatae corporis cumque doloremque dolorum, error illum
                    inventore, ipsum itaque, laudantium libero minus molestiae quia quibusdam quis suscipit
                    voluptatibus? Dicta eaque, earum ipsam laboriosam laborum libero modi, nihil nostrum odio odit omnis
                    quod rem, reprehenderit repudiandae sint tempora tenetur. Ab adipisci alias, aliquid amet architecto
                    aut autem commodi consectetur consequatur cumque dolore eligendi ex excepturi facilis harum hic illo
                    ipsum, iure non nostrum numquam provident quasi ratione sed sit tempora ullam ut vel voluptatem
                    voluptatibus. Ab consequuntur quis reiciendis?
                </Text>
            </View>
            <View style={styles.ItemSeparator}/>
            <View style={[styles.tweetEngagement, styles.flexRow]}>
                <View style={styles.flexRow}>
                    <Text style={styles.engagementCount}>1,250</Text>
                    <Text style={styles.engagementText}>Retweets</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.engagementCount}>1,250</Text>
                    <Text style={styles.engagementText}>Quote Tweets</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.engagementCount}>1,250</Text>
                    <Text style={styles.engagementText}>Likes</Text>
                </View>
            </View>
            <View style={styles.ItemSeparator}/>
            <View style={styles.tweetEngagementIconsContainer}>
                <TouchableOpacity style={styles.flexRow}>
                    <EvilIcons name="comment" size={26} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name="retweet" size={26} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name="heart" size={26} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name={Platform.OS === 'ios'?'share-apple':'share-google'} size={26} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.ItemSeparator}/>
        </View>
    );
};
export default TweetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    flexRow: {
        flexDirection: "row",

    },
    profileContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 12,
        borderRadius: 25
    },
    tweetName: {
        fontWeight: "bold",
        color: "#222222"
    },
    tweetHandle: {
        color: "gray"
    },
    tweetContentContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12
    },
    tweetContent: {
        fontSize: 16,
        lineHeight: 24
    },
    ItemSeparator: {
        backgroundColor: "#ddd",
        height: 1,
        width: "100%"

    },
    tweetEngagement:{
        paddingHorizontal:12,
        paddingVertical: 12,
    },
    engagementCount:{
        fontWeight:"bold",
        paddingRight:4
    },
    engagementText:{
        color:"gray",
        paddingRight:10
    },
    tweetEngagementIconsContainer:{
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection:"row",
        justifyContent:"space-between"
    }
});
