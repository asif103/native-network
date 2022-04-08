import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TouchableOpacityComponent,
    Linking, FlatList
} from "react-native";
import {EvilIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';    const DATA = [
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




const ProfileScreen = () => {
    const {width, height} = Dimensions.get('window')
    const profileHeader =()=> (
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png'}}
                    style={styles.coverImage}/>
                <View style={styles.profileImageSection}>
                    <Image
                        source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png'}}
                        style={styles.avatar}/>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.tweetName}>User Name</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@username</Text>
                </View>
                <View>
                    <Text style={styles.aboutContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        cupiditate impedit inventore laborum vero? Dolores fugiat harum nostrum odio reiciendis.</Text>
                </View>
                <View style={[styles.infoContainer, styles.flexRow]}>
                    <EvilIcons name="location" size={24} color="black"/>
                    <Text style={[styles.textGray, styles.ml4]}>Dhaka, Bangladesh</Text>
                </View>
                <View style={[styles.infoContainer, styles.flexRow]}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://wordpress.org')}>
                        <View style={styles.flexRow}>
                            <EvilIcons name="link" size={24} color="gray"/>
                            <Text style={{color: "blue"}}>website.com</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.flexRow, styles.ml4]}>
                        <AntDesign name="calendar" size={20} color="gray"/>
                        <Text style={[styles.textGray, styles.ml4]}>Dhaka, Bangladesh</Text>
                    </View>
                </View>
                <View style={[styles.infoContainer, styles.flexRow]}>
                    <View style={styles.flexRow}>
                        <Text style={styles.engagementCount}>1,250</Text>
                        <Text style={styles.engagementText}>Following</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Text style={styles.engagementCount}>1,250</Text>
                        <Text style={styles.engagementText}>Followers</Text>
                    </View>
                </View>
                <View style={styles.ItemSeparator}/>
            </View>
        );

    const renderItem = ({ item }) => (
        <View style={{marginVertical:10 }}>
        <Text>{item.title} </Text>
        </View>
    );
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={profileHeader}
        />
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    coverImage: {
        width: Dimensions.get('window').width,
        height: 150
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: "#ffffff",
        borderWidth: 4
    },
    followButton: {
        height: 40,
        backgroundColor: "#222222",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    followButtonText: {
        color: "#ffffff",
        paddingHorizontal: 20,
        fontWeight: "bold"
    },
    profileImageSection: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        marginTop: -30
    },
    tweetName: {
        fontSize: 24,
        fontWeight: "700",
        paddingHorizontal: 12,
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: "gray",
        paddingHorizontal: 12,
    },
    aboutContent: {
        paddingHorizontal: 12,
        paddingVertical: 4
    },
    textGray: {
        color: "gray"
    },
    ml4: {
        marginLeft: 4
    },
    infoContainer: {
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    flexRow: {
        flexDirection: "row",
    },
    engagementCount: {
        fontWeight: "bold",
        paddingRight: 4
    },
    engagementText: {
        color: "gray",
        paddingRight: 10
    },
    ItemSeparator: {
        backgroundColor: "#ddd",
        height: 1,
        width: "100%"

    },

});
