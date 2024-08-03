import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'react-native-linear-gradient';
import Ant from 'react-native-vector-icons/AntDesign';
import api from '../Components/api';
import RNRestart from 'react-native-restart'

const Signup = ({ navigation, route }) => {
    const [countrycode, setCountrycode] = useState('+91');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const gradientColors = ['#349de1', '#2672a6'];
    const [values, setValues] = useState({
        name: '', email: '', phone_code: '+91', mobile: '', password: '', confirmpassword: '', user_type: ''
    });
    const vtype = route.params?.vtype || 0;

    const handleSubmit = async () => {
        console.log("Submitting data:", {
            ...values,
            user_type: vtype
        });

        try {
            const response = await api.post('signup', {
                ...values,
                user_type: vtype
            });
            navigation.navigate('Login');
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting data:", error.response ? error.response.data : error.message);
        }
    };




    return (
        <View style={styles.container} >
            <View style={styles.firstContainer}>
                <Text style={styles.head}>Sign Up as {vtype == 2 ? 'priest' : 'user'}</Text>
                <Text style={styles.headOne}>Please Sign Up to Continue</Text>

                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor="gray"
                    value={values.name}
                    onChangeText={(text) => setValues({ ...values, name: text })}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={(text) => setValues({ ...values, email: text })}
                />
                <Text style={styles.label}>Mobile Number</Text>
                <View
                    style={styles.inp}>
                    <TouchableOpacity onPress={() => navigation.navigate('select')}>
                        <View style={styles.icon} >
                            <Icon name="phone-square-alt" color='black' size={20} />
                            <Text style={styles.pick}> +91</Text>
                            <Ant name='caretdown' color="black" size={20} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        top: 15, color: 'black'
                    }}>|</Text>
                    < TextInput
                        style={styles.inputt}
                        placeholder="Enter Mobile Number"
                        keyboardType='numeric'
                        placeholderTextColor="gray"
                        value={values.mobile}
                        onChangeText={(text) => setValues({ ...values, mobile: text })}
                    />
                </View>
                <View>
                    <Text style={styles.firstline}></Text>
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPass}
                        placeholder="Enter Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!showPassword}
                        value={values.password}
                        onChangeText={(text) => setValues({ ...values, password: text })}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.visibilityBtn}>
                        <Text style={styles.visibilityBtnText}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPass}
                        placeholder="Enter Confirm Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!showConfirmPassword}
                        value={values.confirmpassword}
                        onChangeText={(text) => setValues({ ...values, confirmpassword: text })}

                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.visibilityBtn}>
                        <Text style={styles.visibilityBtnText}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        isChecked={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <Text style={styles.checkboxText}>
                        I accept all
                        <TouchableOpacity onPress={() => navigation.navigate('terms')}>
                            <Text style={styles.highlight}> Terms & Conditions </Text>
                        </TouchableOpacity>
                        and
                        <TouchableOpacity onPress={() => navigation.navigate('privacy')}>
                            <Text style={styles.highlight}> Privacy Policy </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <LinearGradient colors={gradientColors} style={styles.btn}>
                        <Text style={styles.sign}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.dont}>
                < TouchableOpacity onPress={() => vtype == 1 ? navigation.navigate('Login', { vtype: 1 }) : navigation.navigate('Login', { vtype: 2 })} >
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}> */}
                    <Text style={styles.signInText}>
                        Already have an account? Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        // backgroundColor: '#38aef8',
        backgroundColor: '#3699d4',
    },
    firstContainer: {
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#f3f3f3',
    },
    head: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 10,
    },
    headOne: {
        color: "black",
        fontSize: 16,
        marginBottom: 20,
    },
    label: {
        color: "black",
        fontSize: 17,
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 16,
    },
    visibilityBtn: {
        paddingLeft: 5,
    },
    visibilityBtnText: {
        fontWeight: 'bold',
        color: 'black',
    },
    inputPass: {
        flex: 1,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    checkboxText: {
        left: 10,
        fontSize: 12,
        color: 'black',
    },
    highlight: {
        color: '#0E82FD',
        textDecorationLine: 'underline',
        top: 3,
        fontSize: 12,
    },
    signInText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 22,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        bottom: 10,
    },
    firstline: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        bottom: 10,
    },
    btn: {
        padding: 15,
        width: '90%',
        margin: 'auto',
        borderRadius: 30,
        bottom: 10,
        marginBottom: 10,
    },
    sign: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
    dont: {
        margin: 'auto',
    },
});
export default Signup;
