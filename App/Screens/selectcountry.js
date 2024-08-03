import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import india from '../Images/india.png';
import usa from '../Images/usa.jpg';

const Country = () => {
    return (
        <View style={styles.main}>
            <View style={styles.country}>
                <Image source={india} style={styles.img} />
                <Text style={styles.text}>India</Text>
            </View>
            <View style={styles.country}>
                <Image source={usa} style={styles.img} />
                <Text style={styles.text}>USA</Text>
            </View>
        </View >
    );
};
export default Country;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    country: {
        flexDirection: 'row',
        borderBlockColor: 'grey',
        borderBottomWidth: 0.5,
        padding: 10,
    },
    text: {
        fontWeight: '800',
        fontSize: 17,
        color: 'black',
        left: 20,
    },
    img: {
        marginLeft: 20,
    }
});