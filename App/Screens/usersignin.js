import React, { useState } from 'react';
import logo from '../Images/priest3.png';
import google from '../Images/google.jpg';
import { Picker } from '@react-native-picker/picker';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ant from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'react-native-linear-gradient';
import api from '../Components/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const Login = ({ navigation, route }) => {
    const [countrycode, setcountrycode] = useState('+91');
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({ mobile: '', password: '' });
    const [error, setError] = useState(false)
    const [user, setUser] = useState(null);
    const gradientColors = ['#349de1', '#2672a6'];
    const vtype = route.params?.vtype || 0;
    console.log("vtype",vtype);
    const handleLogin = async () => {
        if (values.mobile === '' || values.password === '') {
            setError(true);
        } else {
            const resp = await api.post('login', { mobile: values.mobile, password: values.password ,user_type:vtype});
            if (resp.data.status === true) {
                let info = resp.data.response;
                // info.user_type = 1; //io
                setUser(resp.data);
                await AsyncStorage.setItem('auth-user', JSON.stringify(info));
                RNRestart.restart();
            } else {
                alert('Invalid Phone or Password');
            }
            setError(false);
        }
    };
    return (
        <>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={logo} style={styles.img} />

                    <View>
                        < Text style={{ fontWeight: '800', padding: 2, color: '#000', fontSize: 22, marginTop: 15 }}>Sign In as {vtype == 2 ? 'Priest' : 'User'}
                        </Text>
                        < Text style={{ color: '#000', fontWeight: '400', fontSize: 15, top: 3, }}>Please Sign In to continue</Text>
                        <Text style={{
                            color: '#000', marginTop: 20, fontWeight: '600',
                            fontSize: 16,
                        }}>Mobile Number</Text>

                    </View>
                    <KeyboardAvoidingView behavior="padding">
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
                                onChangeText={(text) => setValues({ ...values, mobile: text })}
                            />
                        </View>
                        <View>
                            <Text style={styles.firstline}></Text>
                        </View>
                        <View style={styles.password}>
                            <Text style={{
                                color: '#000', fontWeight: '600',
                                fontSize: 16,
                            }}>Password</Text>
                            <View style={styles.password}>
                                <TextInput
                                    secureTextEntry={!showPassword}
                                    style={styles.pass}
                                    placeholder="Enter Password"
                                    placeholderTextColor='gray'
                                    onChangeText={(text) => setValues({ ...values, password: text })}
                                />
                                < TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.hide}>
                                    <Text style={{ fontWeight: '600', color: 'black' }} >{showPassword ? 'Hide' : 'Show'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.secondline} ></Text>
                        </View>
                    </KeyboardAvoidingView>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
                            <Text style={[styles.for]}>Forgot Password?</Text></TouchableOpacity>
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={handleLogin}>
                            <LinearGradient colors={gradientColors} style={styles.btn}>
                                <Text style={styles.sign}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hrContainer}>
                        <View style={styles.line} />
                        <Text style={styles.hrText}>Or</Text>
                        <View style={styles.line} />
                    </View>
                    <View>
                        <Text style={styles.social}>Social Media Login</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={{ alignSelf: 'center', bottom: 10, backgroundColor: '#fff', padding: 8, borderRadius: 8 }}>
                            <Image source={google} />
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={styles.dont}>
                    < TouchableOpacity onPress={() => vtype == 1 ? navigation.navigate('Signup', { vtype: 1 }) : navigation.navigate('Signup', { vtype: 2 })} >

                    {/* < TouchableOpacity onPress={() => navigation.navigate('Signup', { vtype })} > */}

                        < Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '600',
                        }}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: '#38aef8',
        backgroundColor: '#3699d4',
    },
    img: {
        alignSelf: 'center',
        marginTop: 7,
    },
    container: {
        padding: 20,
        paddingBottom: 5,
        backgroundColor: '#f3f3f3',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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
        color: 'black',
    },
    hide: {
        bottom: 40,
        marginLeft: 'auto',
        color: 'black',
    },
    pass: {
        bottom: 5,
        color: '#000',
    },
    for: {
        color: '#000',
        alignSelf: 'flex-end',
        fontWeight: '600',
        bottom: 30,
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
    hrContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        bottom: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'grey',
    },
    hrText: {
        marginHorizontal: 10,
        color: '#000',
        fontWeight: '500',
    },
    social: {
        color: '#000',
        alignSelf: 'center',
        fontWeight: '500',
        bottom: 20,
    },
    dont: {
        // padding: 35,
        alignSelf: 'center',
        margin: 'auto',
    },
    firstline: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        bottom: 10,
    },
    secondline: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        bottom: 34,
    },
});
