import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Login from "./App/Screens/usersignin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./App/Screens/usersignup";
import Country from "./App/Screens/selectcountry";
import Terms from "./App/Screens/terms";
import Privacy from "./App/Screens/privacy";
import Forgot from "./App/Screens/forgot";
import Home from './App/Screens/home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookings from "./App/Screens/bookings";
import Event from "./App/Screens/events";
import Profile from "./App/Screens/profile";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsd from 'react-native-vector-icons/FontAwesome5';
import Person from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Choice from "./App/Screens/priest-user";
import Contact from "./App/Screens/contact";
import FaqScreen from "./App/Screens/faq";
import Change from "./App/Screens/changepassword";
import About from "./App/Screens/about";
import CustomAlert from "./App/Screens/deleteaccount";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logout from "./App/Screens/logout";
import Loader from "./App/Config/Loader";
import Selectpriest from "./App/Screens/select";
import Wallet from "./App/Screens/wallet";
import Categories from "./App/Screens/categories";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: 'auto',
          width: '96%',
          bottom: 20,
          borderRadius: 50,
          backgroundColor: '#38aef8',
          paddingTop: 8,
          paddingBottom: 8,
          height: 90,
          maxHeight: 150,
        },
        tabBarItemStyle: {
          padding: 10,
          borderRadius: 40,
          marginHorizontal: 10,
        },
      }}
    >
      <Tab.Screen name='home' component={Home} options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='home' size={25} color={color} />
        ),
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
      }}
      />
      <Tab.Screen name='notevebt' component={Event}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <Iconsd name='fire-alt' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }
        }
      />
      <Tab.Screen name='bookings' component={Bookings}
        options={{
          headerShown: false,
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Person name='calendar-clear' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }
        }
      />
      <Tab.Screen name='profile' component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Person name='person' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }
        }
      />
    </Tab.Navigator >

  );
};

const App = () => {
  const [initialroute, setInitialroute] = useState('choice');
  const [active, setActive] = useState(false)
  const [user, setUser] = useState(null);
  // console.log(user)


  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {

    const info = await AsyncStorage.getItem('auth-user');
    if (info) {
      let data = JSON.parse(info);
      setUser(data);
      setInitialroute('look');
    }
    setActive(true)
  }


  return (
    <>
      {active ? (
        <NavigationContainer >
          <Stack.Navigator initialRouteName={initialroute}>
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: false
            }} />
            <Stack.Screen name='look' component={Main} options={{
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
            <Stack.Screen name='choice' component={Choice} options={{
              headerShown: false
            }} />
            <Stack.Screen name='contact' component={Contact} options={{
              headerShown: false
            }} />
            <Stack.Screen name='faq' component={FaqScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name='change' component={Change} options={{
              headerShown: false
            }} />
            <Stack.Screen name='about' component={About} options={{
              headerShown: false
            }} />
            <Stack.Screen name='selectpriest' component={Selectpriest} options={{
              headerShown: false
            }} />
            <Stack.Screen name='wallet' component={Wallet} options={{
              headerShown: false
            }} />
            <Stack.Screen name='categories' component={Categories} options={{
              headerShown: false
            }} />
            {/* <Stack.Screen name='editprofile' component={EditProfile} options={{
            headerShown: false
          }} /> */}
            <Stack.Screen name='delete' component={CustomAlert} />
            <Stack.Screen name='logout' component={Logout} options={{
              headerShown: false,
            }} />
          </Stack.Navigator>
        </NavigationContainer >
      ) : <Loader />}
    </>

  );
};
export default App;