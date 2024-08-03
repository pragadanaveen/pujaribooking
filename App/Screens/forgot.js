import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import back from '../Images/bddesign.jpg';
import Ant from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'react-native-linear-gradient';


const Forgot = ({ navigation }) => {
    const gradientColors = ['#349de1', '#2672a6'];
    return (
        <View style={styles.container}>
            <View>
                <Image source={back} style={styles.main} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                    <Icons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>Forgot Password</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.one}>
                    <Text style={{
                        color: '#000', marginTop: 20, fontWeight: '600',
                        fontSize: 16,
                    }}>Mobile Number</Text>
                    <View
                        style={styles.inp}>
                        <TouchableOpacity onPress={() => navigation.navigate('select')}>
                            <View style={styles.icon} >
                                <Icon name="phone-square-alt" color='black' size={20} />
                                <Text style={styles.pick}> +91</Text>
                                <Ant name='caretdown' color="black" size={20} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ top: 15, color: 'black' }}>|</Text>
                        <TextInput
                            style={styles.inputt}
                            placeholder="Enter Mobile Number"
                            keyboardType='numeric'
                            placeholderTextColor='gray'
                        />
                    </View>
                    <View>
                        <Text style={styles.firstline}></Text>
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity>
                            <LinearGradient colors={gradientColors} style={styles.btn}>
                                <Text style={styles.sign}>Send</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        // backgroundColor: 'skyblue',
        // height: 250,
        width: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: -9
    },
    backButton: {
        position: 'relative',
        left: 10,
        top: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // tandc: {
    //     fontSize: 14,
    //     color: '#000',
    //     lineHeight: 20,
    //     zIndex: 999,
    //     textAlign: 'justify',
    // },
    box: {
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 20,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 40
    },
    one: {
        // flex: 1,
        padding: 20,
        height: 'auto',
    },
    inp: {
        flexDirection: 'row',
    },
    icon: {
        flexDirection: 'row',
        top: 12,
    },
    pick: {
        color: '#000',
        fontWeight: '800',
        fontSize: 15,
        paddingHorizontal: 5,
    },
    inputt: {
        flex: 8,
    },
    btn: {
        padding: 15,
        width: '90%',
        margin: 'auto',
        borderRadius: 30,
        bottom: 10,
    },
    sign: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
    firstline: {
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        bottom: 10,
    },
});


export default Forgot;