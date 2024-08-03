import React, { useEffect, useState } from "react";
import { Modal, Alert, View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import img from '../Images/bddesign.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import Loader from "../Config/Loader";

const Profile = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [user, setuser] = useState({});
    const [active, setActive] = useState(false);


    useEffect(() => {
        getUser();
    }, [isFocused])

    const getUser = async () => {
        const info = await AsyncStorage.getItem('auth-user');
        if (info) {
            setuser(JSON.parse(info));
        }
        setActive(true);
    }
    console.log(user);


    return (
        <>
            {active ? (
                < View style={styles.body} >
                    <View style={styles.main}>
                        <View style={styles.head}>
                            <Image source={img} style={styles.im} />
                        </View>
                        <Text style={styles.text}>Profile</Text>
                        {/* <Icon name="account-circle-outline" size={100} color="black" style={styles.profileIcon} /> */}
                        <Iconn name="account-circle" size={90} color="black" style={styles.profileIcon} />
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.box}>
                            <Text style={styles.sectionTitle}>Help & Information</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('contact')} style={styles.option}>
                                <Icon name="phone" size={24} color="black" />
                                <Text style={styles.optionText}>Contact Us</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('about')} style={styles.option}>
                                <Icon name="information-outline" size={24} color="black" />
                                <Text style={styles.optionText}>About Us</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('terms')} style={styles.option}>
                                <Icon name="file-document-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Terms & Conditions</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('privacy')} style={styles.option}>
                                <Icon name="shield-lock-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Privacy Policy</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('faq')} style={styles.option}>
                                <Icon name="help-circle-outline" size={24} color="black" />
                                <Text style={styles.optionText}>FAQ's</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.sectionTitle}>My Activity</Text>
                            <TouchableOpacity onPress={() => navigation.goBack} style={styles.option}>
                                <Icon name="human" size={24} color="black" />
                                <Text style={styles.optionText}>Favourite Priest</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.option}>
                                <Icon name="campfire" size={24} color="black" />
                                <Text style={styles.optionText}>Favourite Event</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.sectionTitle}>Account Settings</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.option}>
                                <Icon name="account-edit-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Edit Profile</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('wallet')} style={styles.option}>
                                <Icon name="wallet-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Wallet</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('change')} style={styles.option}>
                                <Icon name="lock-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Change Password</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.option}>
                                <Icon name="star-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Rate App</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.option}>
                                <Icon name="share-variant-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Share App</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => twoOptionAlertHandler()
                            } style={styles.option}>
                                <Icon name="delete-outline" size={24} color="black" />
                                <Text style={styles.optionText}>Delete Account</Text>
                                <Icon name="chevron-right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.logout}>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('logout')}>
                                < Icon name="power" size={24} color="white" style={styles.logoutIcon} />
                                <Text style={styles.sign}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView >
                </View >
            ) : <Loader />}
        </>
    );
};

export default Profile;

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
        zIndex: 1 // Ensure the main view is behind the scroll view
    },
    im: {
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    head: {
        height: 200,
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
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -70,
        marginLeft: 110,
        position: 'relative'
    },
    email: {
        display: 'block',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 110,
        position: 'relative',
        borderRadius: 20
    },
    profileIcon: {
        marginTop: 60,
        marginLeft: 10,
    },
    scrollView: {
        marginTop: 180,
        zIndex: 99, // Ensure the scroll view is on top
    },
    scrollViewContent: {
        paddingBottom: 50, // Add padding to avoid content being cut off
    },
    box: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    sectionTitle: {
        color: '#38aef8',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    optionText: {
        flex: 1, // Ensure the text takes up the remaining space
        marginLeft: 10,
        fontSize: 16,
        color: '#000'
    },
    btn: {
        flexDirection: 'row', // Align children horizontally
        backgroundColor: 'darkred',
        padding: 15,
        width: '90%',
        alignSelf: 'center',
        marginTop: 18,
        borderRadius: 30,
        alignItems: 'center', // Center the icon and text vertically
        justifyContent: 'center' // Center the icon and text horizontally
    },
    logoutIcon: {
        marginRight: 10, // Add space between the icon and text
    },
    sign: {
        color: '#fff',
        fontWeight: '900',
    },
});