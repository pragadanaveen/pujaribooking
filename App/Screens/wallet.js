import React, { useState, useEffect } from "react";
import { Text, View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../Components/api";

const Wallet = () => {
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [values, setValues] = useState({ old_password: '', confirm_password: '', new_password: '', user_id: '' });
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        getPassword()
    }, []);
    const getPassword = async () => {
        const userInfo = await AsyncStorage.getItem('auth-user');
        const parsedUserInfo = JSON.parse(userInfo);
        setUser(parsedUserInfo);
        setValues(prevValues => ({ ...prevValues, user_id: parsedUserInfo.id }));

    }


    const handleSubmit = async () => {
        if (!values.old_password || !values.new_password || !values.confirm_password) {
            setError(true);
            setErrorMessage("Please fill the all inputs.");
            return;
        }
        if (values.new_password !== values.confirm_password) {
            setError(true);
            setErrorMessage("New password and confirm password do not match.");
            return;
        }
        const response = await api.post(`change-password/`, {
            old_password: values.old_password,
            new_password: values.new_password
        });
        if (response.data.status === true) {
            Alert.alert("Password changed successfully");
            navigation.navigate('profile');
        } else {
            setError(true);
            setErrorMessage("Failed to change password. Please try again.");
        }
    };

    const handleNewPasswordChange = (text) => {
        setNewpassword(text);
        setError(false);
        if (values.confirm_password !== '' && text !== values.confirm_password) {
            setError(true);
            setErrorMessage("New Password and Confirm Password both are not same!.");
        } else {
            setErrorMessage("");
        }
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmpassword(text);
        setError(false);
        if (text !== newpassword) {
            setError(true);
            setErrorMessage("New Password and Confirm Password both are not same !");
        } else {
            setErrorMessage("");
        }
    };


    return (
        <ScrollView>
            <View style={styles.body}>

                {/* <View>
          <Text style={[styles.first_text]}>Change Password</Text>
        </View> */}
                {/* <View>
          <Text style={[styles.small_text]}>
            Your Password must be at least 6 characters long
          </Text>
        </View> */}
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Old Password"
                        placeholderTextColor={'#394249'}
                        secureTextEntry
                        value={values.old_password}
                        onChangeText={text => setValues({ ...values, old_password: text })}
                    />
                    <View style={{ width: '100%', marginBottom: 15 }}>
                        {error && !values.old_password ? (
                            <Text style={styles.errorText}>Please Enter Old Password</Text>
                        ) : null}
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="New password"
                        placeholderTextColor={'#394249'}
                        secureTextEntry
                        value={values.new_password}
                        onChangeText={text => { handleNewPasswordChange(text); setValues({ ...values, new_password: text }); }}
                    />
                    <View style={{ width: '100%', marginBottom: 15 }}>
                        {error && !values.new_password ? (
                            <Text style={styles.errorText}>Please Enter New Password</Text>
                        ) : null}
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor={'#394249'}
                        secureTextEntry
                        value={values.confirm_password}
                        onChangeText={text => { handleConfirmPasswordChange(text); setValues({ ...values, confirm_password: text }); }}
                    />
                    <View style={{ width: '100%', marginBottom: 15 }}>
                        {error && !values.confirm_password ? (
                            <Text style={styles.errorText}>Please Enter Confirm Password</Text>
                        ) : null}
                    </View>
                    {error && errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>goBack</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
        alignItems: "center"
    },
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 6,
        margin: 15,
        backgroundColor: "white",
    },
    first_text: {
        fontSize: 35,
        padding: 20,
        top: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        color: 'black'
    },
    small_text: {
        padding: 20,
        fontSize: 16,
        marginBottom: 10,
        color: 'black'
    },
    submitButton: {
        height: 50,
        width: 150,
        backgroundColor: '#2980b9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30,
        marginBottom: 40
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 'auto',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 16,
        marginBottom: 15,
    },
    errorText: {
        color: 'red',
        width: '100%',
    },
});
export default Wallet;