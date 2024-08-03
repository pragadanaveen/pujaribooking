 import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import logo from '../Images/file.png';
import design from '../Images/bddesign.jpg';
import api from '../Components/api';

const Event = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState('');
    const [events, setEvents] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(()=>{
        getEvents();
    },[]);

    const getEvents = async() => {
        const resp = await api.get('events');
        setEvents(resp.data.data);
        setTotalPages(resp.data.last_page);
        setCurrentPage(resp.data.current_page);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={design} style={styles.backgroundImage} />
                <Text style={styles.title}>Events</Text>
                <View style={styles.searchContainer}>
                    <Icon name="search1" size={20} color="#aaa" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Event"
                        placeholderTextColor="#aaa"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.main}>
                    {events.length > 0 ? (
                        events.map((event, key) => (

                            <View key={key} style={styles.box}>
                                <Image
                                    source={{ uri: `https://pujaribooking.com/priest/app/webservice/images/${event.image}` }}
                                    style={styles.eventImage}
                                />
                                <Text style={styles.text} > {event.name}</Text>
                                {/* <Text style={styles.text}>{category.priest_id}</Text> */}
                                {/* <Text style={styles.text}>{category.image}</Text> */}

                                {/* <Text style={styles.text}>{category.createtime}</Text> */}
                            </View>
                        ))
                    ) : (
                        <View style={styles.emptyStateContainer}>
                <Image source={logo} style={styles.emptyImage} />
                <Text style={styles.emptyText}>Looks A Little Empty Here</Text>
            </View>
                    )}
                </View >
            </ScrollView >



            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f0f0f0',
    },
    header: {
        // backgroundColor: '#38aef8',
        height: 200,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    backgroundImage: {
        position: 'absolute',
        // width: '100%',
        // height: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: -1,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        bottom: 40,
        right: 140
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        top: 20,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 10,
        color: '#000',
    },

    scrollViewContent: {
        flexGrow: 1,
        display: 'flex',
    },
    main: {
        position: 'relative',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: '45%',
        // height: 250,
        padding: 15,
        margin: 'auto',
        position: 'relative',
        marginBottom: 20
    },
    eventImage: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        resizeMode: 'cover',
    },
});

export default Event;
