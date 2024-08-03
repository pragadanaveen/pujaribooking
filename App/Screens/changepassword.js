import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import design from '../Images/bddesign.jpg';
import api from '../Components/api';

const Change = ({ navigation }) => {
    const [currentpassChange, setCurrentpassChange] = useState(false);
    const [newpassChange, setNewpassChange] = useState(false);
    const [confirmpassChange, setConfirmpassChange] = useState(false);

    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [values, setValues] = useState({
        old_password: '', password: '', confirm_password: ''
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        if (!values.old_password || !values.password || !values.confirm_password) {
            setError(true);
            setErrorMessage("Please fill the all inputs.");
            return;
        }
        if (values.password !== values.confirm_password) {
            setError(true);
            setErrorMessage("New password and confirm password do not match.");
            return;
        }

        try {
            const response = await api.post(`change_password`, {
                old_password: values.old_password,
                password: values.password,
                confirm_password: values.confirm_password
            });

            if (response.data.status === true) {
                Alert.alert("Password changed successfully");
                navigation.navigate('profile');
            } else {
                setError(true);
                setErrorMessage("Failed to change password. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setErrorMessage("There was an error changing your password. Please try again.");
        }
    };


    const handleNewPasswordChange = (text) => {
        setNewpassword(text);
        setError(false);
        setValues({ ...values, password: text });

        if (text !== values.confirm_password && values.confirm_password !== '') {
            setError(true);
            setErrorMessage("New Password and Confirm Password both are not same!.");
        } else {
            setErrorMessage("");
        }
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmpassword(text);
        setError(false);
        setValues({ ...values, confirm_password: text });

        if (text !== newpassword && newpassword !== '') {
            setError(true);
            setErrorMessage("New Password and Confirm Password both are not same !");
        } else {
            setErrorMessage("");
        }
    };


    return (
        <View style={styles.main}>
            <Image source={design} style={styles.im} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.password}>Change Password</Text>
            </View>

            <View style={styles.box}>
                <View style={styles.labelBottom}>
                    <Text style={styles.label}>Current Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPass}
                        placeholder="Enter Current Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!currentpassChange}
                        value={values.old_password}
                        onChangeText={text => setValues({ ...values, old_password: text })}
                    />
                    <TouchableOpacity onPress={() => setCurrentpassChange(!currentpassChange)} style={styles.visibilityBtn}>
                        <Text style={styles.visibilityBtnText}>{currentpassChange ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', marginBottom: 15 }}>
                    {error && !values.old_password ? (
                        <Text style={styles.errorText}>Please Enter Old Password</Text>
                    ) : null}
                </View>

                <View style={styles.labelBottom}>
                    <Text style={styles.label}>New Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPass}
                        placeholder="Enter New Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!newpassChange}
                        value={values.password}
                        onChangeText={text => { handleNewPasswordChange(text); setValues({ ...values, password: text }); }}
                    />
                    <TouchableOpacity onPress={() => setNewpassChange(!newpassChange)} style={styles.visibilityBtn}>
                        <Text style={styles.visibilityBtnText}>{newpassChange ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', marginBottom: 15 }}>
                    {error && !values.new_password ? (
                        <Text style={styles.errorText}>Please Enter New Password</Text>
                    ) : null}
                </View>

                <View style={styles.labelBottom}>
                    <Text style={styles.label}>Confirm New Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPass}
                        placeholder="Enter Confirm New Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!confirmpassChange}
                        value={values.confirm_password}
                        onChangeText={text => { handleConfirmPasswordChange(text); setValues({ ...values, confirm_password: text }); }}
                    />
                    <TouchableOpacity onPress={() => setConfirmpassChange(!confirmpassChange)} style={styles.visibilityBtn}>
                        <Text style={styles.visibilityBtnText}>{confirmpassChange ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', marginBottom: 15 }}>
                    {error && !values.confirm_password ? (
                        <Text style={styles.errorText}>Please Enter Confirm Password</Text>
                    ) : null}
                </View>

                <View >
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text}>Change Password</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'relative',
        backgroundColor: '#38aef8',
        height: 270,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        alignItems: 'center',
    },
    im: {
        position: 'absolute',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },
    icon: {
        right: 95,
        top: 15,
    },
    password: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 15,
        right: 70,
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: '90%',
        padding: 20,
        paddingVertical: 10,
        paddingBottom: 75,
        marginTop: 60,
        elevation: 5,
    },
    label: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    },
    labelBottom: {
        top: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 45,
    },
    inputPass: {
        flex: 1,
        height: '100%',
        paddingLeft: 2,
        top: 8,
    },
    visibilityBtn: {
        padding: 2,
        top: 8,
    },
    visibilityBtnText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        width: '100%',
        backgroundColor: '#2a84bd',
        borderRadius: 30,
        padding: 15,
        margin: 'auto',
        top: 30,
        shadowColor: '#000',
        elevation: 15,
    },
    text: {
        margin: 'auto',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default Change;

