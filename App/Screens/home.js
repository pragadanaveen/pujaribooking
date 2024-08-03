import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Person from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/Ionicons';
import logo from '../Images/file.png';
import design from '../Images/bddesign.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState({});
    console.log("username",user.name);
    
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await AsyncStorage.getItem('auth-user');
        if (response) {
            setUser(JSON.parse(response));
        }
    };

    const data = [
        { id: '1', imageSource: require('../Images/akarabyasum.jpg'), text: 'Aksharabhyasam' },
        { id: '2', imageSource: require('../Images/Annaprasana.png'), text: 'Annaprasana' },
        { id: '3', imageSource: require('../Images/ayudapuja.png'), text: 'Ayudha Pooja' },
    ];

    const renderItem = ({ item }) => (
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.imageSpace}>
                <View style={styles.box}>
                    <View style={styles.imageContainer}>
                        <Image source={item.imageSource} style={styles.imageOne} />
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
    return (
        <>
            <View>
                <View>
                    <View style={styles.main}>
                        <View style={styles.container}>
                            <Image source={design} style={styles.im} />
                            <View style={styles.titleIcon}>
                                <Person name="account-circle" size={40} color="white" />
                            </View>
                            <Text style={styles.title}>{user.name}</Text>
                            <View style={styles.iconContainer}>
                                <Bell name="notifications-sharp" size={30} color="white" style={styles.icon} />
                            </View>
                            <TouchableOpacity><Text style={styles.address}>Select Address <Text style={styles.unicode}>{'\u2304'}</Text> </Text></TouchableOpacity>
                            <View style={styles.subtitleMain}>
                                <Text style={styles.subtitle}>Choose the </Text>
                                <Text style={styles.subtitle}>Priest for your Pooja.</Text>
                            </View>

                            <View style={styles.touchable}>
                                <TouchableOpacity style={styles.btn} >
                                    < View style={styles.input} >
                                        <Icon name="search1" size={20} color="#aaa" style={styles.icon} />
                                    </View>
                                    <TextInput
                                        style={styles.input} placeholder="Search priest by location" placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                    <View style={styles.textContainer}>
                        <Text style={styles.priestOne}>Categories</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('categories')}>
                            <Text style={styles.viewAll}>View all &gt;&gt;</Text>
                        </TouchableOpacity>
                    </View>

                </View >


                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <View>
                    <Text style={styles.priest}>Recommended Priest</Text>
                </View>

                <View>
                    <Image source={logo} style={styles.image} />
                    <Text style={styles.imageText}>Looks a little empty here</Text>
                </View>
            </View >
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'relative',
        backgroundColor: '#38aef8',
        height: 270,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },
    title: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 50,
        fontWeight: 'bold',
    },
    titleIcon: {
        top: 40,
        left: 10,
    },
    iconContainer: {
        marginLeft: 'auto',
        bottom: 30,
        paddingRight: 20,
    },
    address:
    {
        color: 'white',
        fontSize: 13,
        paddingLeft: 50,
        bottom: 50,
    },
    unicode: {
        fontSize: 22,
    },
    subtitleMain: {
        marginBottom: 20,
        paddingLeft: 20,
    },
    subtitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        bottom: 45,
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        flex: 0.9,
        bottom: 45,
        height: 60,
    },
    input: {
        left: 25,
    },
    // textContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    category: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 'auto',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '100%',
    },
    imageSpace: {
        paddingHorizontal: 15,
    },

    box: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: '100%',
        height: '50%',
        elevation: 5,
        shadowRadius: 12,
        top: 50,
        padding: 10,
    },
    boxText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 'auto',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    priestOne: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    viewAll: {
        color: '#38aef8',
        fontSize: 15,
    },
    priest:
    {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
        bottom: 110,
    },
    im: {
        position: 'absolute',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },
    image: {
        width: 100,
        height: 100,
        margin: 'auto',
        bottom: 120,
    },
    imageOne: {
        width: 180,
        height: 130,
        borderRadius: 10,
        margin: 'auto',
    },
    imageText:
    {
        fontSize: 8,
        textAlign: 'center',
        bottom: 120,
    },
});
export default Home;
