import React from "react";
import { View, Text } from 'react-native';
import Login from "./App/Components/usersignin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./App/Components/usersignup";
import Country from "./App/Components/selectcountry";
import Terms from "./App/Components/terms";
import Privacy from "./App/Components/privacy";
import Forgot from "./App/Components/forgot";

const Stack = createNativeStackNavigator();

const Stackk = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name='Signup' component={Signup} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="select" component={Country} options={{
                        title: 'Select Country',
                        headerStyle: {
                            fontWeight: '900',
                            fontSize: 25,
                        }
                    }
                    } />
                    <Stack.Screen name='terms' component={Terms} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name='privacy' component={Privacy} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name='forgot' component={Forgot} options={{
                        headerShown: false
                    }} />

                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
};
export default Stackk;