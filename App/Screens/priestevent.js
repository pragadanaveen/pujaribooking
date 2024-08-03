import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const manii = require('../Images/bddesign.jpg');
const manii1 = require('../Images/file.png');

const PriestEvent = ({ navigation }) => {
    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleStatusPress = (status) => {
        setSelectedStatus(status);
    };

    return (
        <View style={styles.outerContainer}>
            <Image source={manii} style={styles.image} />
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.faqs}>My Events</Text>
                    <Text style={styles.total}>Total (0)</Text>
                </View>
                <TouchableOpacity
                    style={styles.createButton}
                //   onPress={() => navigation.navigate('Createevent')}
                >
                    <Ionicons name="add" size={22} color="skyblue" marginLeft={-15} />
                    <Text style={styles.createButtonText}>Create New Event</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusContainer}>
                <TouchableOpacity
                    style={[
                        styles.statusButton,
                        selectedStatus === 'accepted' && styles.statusButtonSelected,
                    ]}
                    onPress={() => handleStatusPress('accepted')}
                >
                    <Text
                        style={[
                            styles.statusButtonText,
                            selectedStatus === 'accepted' && styles.statusButtonTextSelected,
                        ]}
                    >
                        Upcoming Events
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.statusButton,
                        selectedStatus === 'ongoing' && styles.statusButtonSelected,
                    ]}
                    onPress={() => handleStatusPress('ongoing')}
                >
                    <Text
                        style={[
                            styles.statusButtonText,
                            selectedStatus === 'ongoing' && styles.statusButtonTextSelected,
                        ]}
                    >
                        Completed Events
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.emptyContainer}>
                <Image source={manii1} style={styles.image1} />
                <Text style={styles.emptyText}>Looks A Little Empty here</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 270,
        alignSelf: 'center',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        zIndex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        left: 20,
        right: 20,
        zIndex: 2,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 30,
    },
    createButtonText: {
        color: 'skyblue',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 150,
        left: 20,
        right: 20,
        zIndex: 2,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        height: 75,
    },
    statusButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 13,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    statusButtonSelected: {
        backgroundColor: 'skyblue',
    },
    statusButtonText: {
        color: '#999',
    },
    statusButtonTextSelected: {
        color: '#fff',
        fontWeight: 'bold',
    },
    faqs: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
    },
    total: {
        fontSize: 20,
        marginTop: 8,
        color: '#fff',
    },
    emptyContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '10%',
        right: '10%',
    },
    image1: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
    },
    emptyText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '400',
        color: '#333',
        textAlign: 'center',
    },
});

export default PriestEvent;