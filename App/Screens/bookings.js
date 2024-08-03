import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import pic from '../Images/bddesign.jpg';

const Bookings = ({ navigation }) => {
    return (
        <View>
            <View>
                <Image source={pic} style={styles.picc} />
                <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                    <Text style={styles.text}>Event</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default Bookings;

const styles = StyleSheet.create({
    picc: {
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    text: {
        color: 'black',
        fontSize: 25,
        margin: 'auto',
    },
});