import {Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from "react-native";
import {Entypo, EvilIcons} from '@expo/vector-icons';
import {useEffect, useState} from "react";
import axiosConfig from "../helpers/axiosConfig";
import {format} from 'date-fns';

const TweetScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [tweet, setTweet] = useState({})
    const getTweet = () => {
        axiosConfig.get(`/tweets/${route.params.tweetId}`)
            .then(response => {
                setTweet(response.data)
                console.log(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
            })
    }
    useEffect(()=>{
        getTweet()
    },[])
    const goToProfile = () => {
        navigation.navigate('Profile Screen')
    }
    return (
        <View style={styles.container}>
            {
                isLoading? <ActivityIndicator style={{marginTop: 8}} size="large" color="gray"/>
                    :
                    <>
                        <View style={styles.profileContainer}>
                            <TouchableOpacity style={styles.flexRow} onPress={goToProfile}>
                                <Image
                                    source={{uri: tweet.user.avatar}}
                                    style={styles.avatar}/>
                                <View>
                                    <Text numberOfLines={1} style={styles.tweetName}>{tweet.user.name}</Text>
                                    <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet.user.username}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Entypo name="dots-three-vertical" size={20} color="gray"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tweetContentContainer}>

                            <Text style={styles.tweetContent}>{tweet.body}</Text>
                            <View style={styles.tweetTimestampContainer}>
                        <Text style={styles.tweetTimestampText}>
                            {format(new Date(tweet.created_at), 'h:mm a')}
                        </Text>
                        <Text style={styles.tweetTimestampText}>&middot;</Text>
                        <Text style={styles.tweetTimestampText}>
                            {format(new Date(tweet.created_at), 'd MMM.yy')}
                        </Text>
                        <Text style={styles.tweetTimestampText}>&middot;</Text>
                        <Text style={[styles.tweetTimestampText, styles.linkColor]}>
                            Twitter for iPhone
                        </Text>
                    </View>
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
                                <EvilIcons name="comment" size={26} color="gray"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                                <EvilIcons name="retweet" size={26} color="gray"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                                <EvilIcons name="heart" size={26} color="gray"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                                <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={26} color="gray"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ItemSeparator}/>
                    </>
            }
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
    tweetEngagement: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    engagementCount: {
        fontWeight: "bold",
        paddingRight: 4
    },
    engagementText: {
        color: "gray",
        paddingRight: 10
    },
    tweetEngagementIconsContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tweetTimestampContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    tweetTimestampText: {
        color: 'gray',
        marginRight: 6,
    },
    linkColor: {
        color: '#1d9bf1',
    },
});
