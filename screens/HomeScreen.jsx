import {ActivityIndicator, FlatList, Platform, StyleSheet, Text, TouchableOpacityComponent, View} from "react-native";
import {Image, TouchableOpacity} from "react-native";
import {EvilIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {useEffect, useState} from "react";
import axios from "axios";
import {formatDistanceToNowStrict} from "date-fns";
import locale from 'date-fns/locale/en-US'
import formatDistance from "../helpers/formatDistanceCustom";


const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [tweet, setTweet] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [page, setPage] = useState(1)
    const [isAtEndOfScrolling, setIsAtEndOfScrolling] = useState(false)
    const fetchAllTweets = () => {
        axios.get(`http://78a2-103-210-58-23.ngrok.io/api/tweets/?page=${page}`)
            .then(response => {
                if (page === 1) {
                    setTweet(response.data.data)
                } else {
                    setTweet([...tweet, ...response.data.data])
                }
                if(!response.data.next_page_url) {
                    setIsAtEndOfScrolling(true)
                }
                setIsLoading(false)
                setIsRefreshing(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                setIsRefreshing(false)
            })
    }
    const handleRefresh = () => {
        fetchAllTweets()
        setIsRefreshing(true)
        setPage(1)
        setIsAtEndOfScrolling(false)
    }
    const handleEnd = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        fetchAllTweets()
    }, [page])
    const goToProfile = () => {
        navigation.navigate('Profile Screen')
    }
    const goToSingleTweet = () => {
        navigation.navigate('Tweet Screen')
    }
    const goToNewTweet = () => {
        navigation.navigate("New Tweet")
    }
    const TweetItem = ({item: tweet}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={goToProfile}>

                <Image
                    source={{uri: tweet?.user.avatar}}
                    style={styles.avatar}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.flexRow} onPress={goToProfile}>

                    <Text numberOfLines={1} style={styles.tweetName}>{tweet?.user.name}</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet?.user.username}</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>
                        {/*{tweet && formatDistanceToNowStrict(new Date(tweet.created_at))}</Text>*/}
                        {tweet && formatDistanceToNowStrict(new Date(tweet.created_at),
                            {
                                locale: {
                                    ...locale,
                                    formatDistance,
                                }
                            })}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={goToSingleTweet}>
                    <Text style={styles.tweetContent}>{tweet?.body}</Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray"/>
                        <Text style={styles.textGray}>150</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray"/>
                        <Text style={styles.textGray}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray"/>
                        <Text style={styles.textGray}>10,450</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={22}
                                   color="gray"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            {
                isLoading &&
                <ActivityIndicator style={{marginTop: 8}} size="large" color="gray"/>
            }
            <FlatList
                data={tweet}
                renderItem={TweetItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.ItemSeparator}/>}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                onEndReached={handleEnd}
                onEndReachedThreshold={0}
                ListFooterComponent={() => !isAtEndOfScrolling && (<ActivityIndicator style={{marginTop: 8}} size="large" color="gray"/>)}
            />
            {/*<Button*/}
            {/*  title={"create new tweet"}*/}
            {/*  onPress={() => navigation.navigate("New Tweet")}*/}
            {/*/>*/}
            <TouchableOpacity style={styles.floatingButton} onPress={goToNewTweet}>
                <AntDesign name="pluscircle" size={50} color="#1d9bf1"/>
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
    ml4: {
        marginLeft: 4
    },
    ItemSeparator: {
        backgroundColor: "#ddd",
        height: 1,
        width: "100%"

    },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 10
    }

});
