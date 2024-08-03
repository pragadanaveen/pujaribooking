import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from "../Components/api";
import RNRestart from 'react-native-restart';

const Logout = () => {
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            showLogoutAlert();
        }, [])
    );

    const showLogoutAlert = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => navigation.navigate('profile'),
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        const user = await AsyncStorage.getItem('auth-user');
                        if (user) {
                            const userData = JSON.parse(user);
                                const resp = await api.post('logout');
                                await AsyncStorage.removeItem('auth-user');
                                RNRestart.restart();
                            // await AsyncStorage.removeItem('auth-user');

                        }

                    }
                }
            ],
            { cancelable: true }
        );
    };
    return (
        <View>
            <TouchableOpacity onPress={showLogoutAlert} >
                <Text></Text>
            </TouchableOpacity>
        </View >
    );
};
export default Logout;

// const styles = StyleSheet.create({
//     back: {
//         backgroundColor: 'transparent',
//     },
// });