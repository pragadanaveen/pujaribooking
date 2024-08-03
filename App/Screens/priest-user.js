import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import bg from '../Images/bg.png';
import loges from '../Images/poojari.png';
import user from '../Images/user.png';

const Choice = ({ navigation }) => {
    const [selected, setSelected] = useState('priest');

    const handlePress = (choose) => {
        setSelected(choose);

        if (choose === 'priest') {
            navigation.navigate('selectpriest', { vtype: 2 });
        } else if (choose === 'user') {
            navigation.navigate('Login', { vtype: 1 });
        }

    };
    return (

        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bgimage} />
            <View>
                <Text style={styles.txt}>Who you are?</Text>
            </View>
            <TouchableOpacity onPress={() => handlePress('priest')}>
                <View style={styles.main1}>
                    <View style={[styles.poojariview, selected === 'priest' ? styles.selectedBorder : styles.unselectedBorder]}>
                        <Image source={loges} style={styles.poojari} />
                    </View>
                    <View style={styles.label1}>
                        <Text style={[styles.txt1, selected === 'priest' ? styles.selectedText : styles.unselectedText]}>Priest</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('user')}>
                <View style={styles.main2}>
                    <View style={[styles.userview, selected === 'user' ? styles.selectedBorder : styles.unselectedBorder]}>
                        <Image source={user} style={styles.user} />
                    </View>
                    <View style={styles.label2}>
                        <Text style={[styles.txt2, selected === 'user' ? styles.selectedText : styles.unselectedText]}>User</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Choice;

const styles = StyleSheet.create({
    txt: {
        margin: "auto",
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: "20%",
        marginBottom: "10%"
    },
    container: {
        flex: 1,
    },
    bgimage: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', // Position absolutely
        top: -90,
        left: 0,
        right: 0,
    },
    main1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "10%",
    },
    poojari: {
        width: "90%",
        height: "90%",
    },
    poojariview: {
        width: "40%",
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#38aef8',
        borderRadius: 30,
        margin: "auto",
    },
    label1: {
        margin: "auto",
    },
    txt1: {
        marginTop: 5,
        fontSize: 17,
    },
    main2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    label2: {
        margin: "auto",
    },
    txt2: {
        marginTop: 5,
        fontSize: 17,
    },
    user: {
        width: "100%",
        height: "100%",
    },
    userview: {
        width: "32%",
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 30,
        margin: "auto",
        marginTop: 5
    },
    selectedBorder: {
        borderColor: '#38aef8',
    },
    unselectedBorder: {
        borderColor: 'lightgray',
    },
    selectedText: {
        color: "black",
    },
    unselectedText: {
        color: "gray",
    },
});

