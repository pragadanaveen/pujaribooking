import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import SearchBar from 'react-native-search-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import img from '../Images/bddesign.jpg';

const profiles = [
    { id: 1, name: 'Radheshyam', age: 23, experience: 3 },
    { id: 2, name: 'Dhirendra', age: 25, experience: 2 },
    { id: 3, name: 'Amrit', age: 40, experience: 6 },
    { id: 4, name: 'Mahant', age: 35, experience: 1 },
    { id: 5, name: 'Shriram', age: 30, experience: 4 },
];

const Selectpriest = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const vtype = route.params?.vtype || 0;
    console.log(vtype);


    const renderProfile = ({ item }) => (
        <View style={styles.infoContainer}>
            <Icon name="account-circle-outline" size={100} color="black" />
            <View style={styles.infoTextContainer}>
                <Text style={styles.profileName}>{item.name}</Text>
                <Text style={styles.infoText}>Age: {item.age} Years</Text>
                <Text style={styles.infoText}>Experience: {item.experience} Years</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SomeScreen', { profileId: item.id })}>
                    <Text style={styles.claimText}>Claim Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.body}>
            <View style={styles.main}>
                <View style={styles.head}>
                    <Image source={img} style={styles.im} />
                </View>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                    <Icons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>Select your name</Text>
                <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('Login', { vtype: 2 })}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    placeholder="Search priest by name"
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                />
            </View>
            <FlatList
                data={profiles.filter(profile => profile.name.toLowerCase().includes(search.toLowerCase()))}
                renderItem={renderProfile}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.profileList}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    main: {
        position: 'absolute',
        backgroundColor: '#38aef8',
        height: 270,
        width: '100%',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        zIndex: -9
    },
    im: {
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    head: {
        height: 200,
        position: 'absolute',
    },
    backButton: {
        left: 10,
        top: 25,
        position: 'absolute',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 40,
        marginTop: 20,
        position: 'absolute'
    },
    skip: {
        right: 20,
        top: 25,
        position: 'absolute',
    },
    skipText: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    searchBarContainer: {
        marginTop: 140,
        paddingHorizontal: 40,
        marginBottom: 20,
        borderBottomLeftRadius: 60
    },
    btn: {
        backgroundColor: '#2f8ccd',
        padding: 8,
        alignSelf: 'center',
        marginTop: 18,
        borderRadius: 30,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 40,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    infoTextContainer: {
        flex: 1,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    infoText: {
        marginLeft: 20,
        fontSize: 10,
    },
    claimText: {
        color: '#fff',
        fontSize: 14,
    },
    profileList: {
        paddingBottom: 20
    }
});

export default Selectpriest;