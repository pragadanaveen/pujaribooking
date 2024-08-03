// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';
// // Uncomment the following line if you have the image
// const manii = require('../images/india.png');
// const manii1 = require('../images/usa.jpg');


// const EditProfile = ({ navigation }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');


//     const handleSubmit = () => {
//         // Handle the form submission logic
//         console.log('Form Submitted:', { name, email, mobileNumber });
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Image source={manii} style={styles.image} />
//             <View style={styles.common}>
//                 <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
//                     <Icons name="arrow-back" size={30} color="#fff" />
//                 </TouchableOpacity>
//                 <Text style={styles.faqs}>Edit Profile</Text>
//             </View>
//             <View style={styles.loop}>
//                 <View style={styles.profileContainer}>
//                     <Image
//                         source={manii1} // Replace with your image source
//                         style={styles.image1}
//                     />
//                     <View style={styles.textContainer}>
//                         <Text style={styles.profileText}>Profile Picture</Text>
//                         <Text style={styles.changeText}>Change Profile Picture</Text>
//                     </View>
//                 </View>
//                 <Text style={styles.label}>Name</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter your name"
//                     placeholderTextColor="#999"
//                     value={name}
//                     onChangeText={setName}
//                 />
//                 <Text style={styles.label}>Email</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Email"
//                     placeholderTextColor="#999"
//                     value={email}
//                     onChangeText={setEmail}
//                 />
//                 <Text style={styles.label}>Mobile Number</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter mobile number"
//                     placeholderTextColor="#999"
//                     value={mobileNumber}
//                     onChangeText={setMobileNumber}
//                 />

//                 <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//                     <Text style={styles.submitButtonText}>Update</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#fff',
//     },
//     image: {
//         width: '100%',
//         height: 250,
//         alignSelf: 'center',
//         borderBottomLeftRadius: 70,
//         borderBottomRightRadius: 70,
//     },
//     loop: {
//         backgroundColor: '#fff',
//         borderRadius: 20,
//         marginHorizontal: 20,
//         alignSelf: 'center',
//         width: '92%',
//         padding: 20,
//         shadowColor: 'skyblue',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.5,
//         shadowRadius: 10,
//         elevation: 10,
//         marginTop: 50,
//         position: 'absolute',
//         top: 80,
//     },
//     common: {
//         left: 10,
//         top: 25,
//         position: 'absolute',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     faqs: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginLeft: 10,
//     },
//     label: {
//         fontSize: 15,
//         color: '#333',
//         marginBottom: 3,
//         fontWeight: 'bold',
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//         marginBottom: 15,
//         fontSize: 15,
//         color: 'red',
//     },
//     submitButton: {
//         backgroundColor: 'blue',
//         paddingVertical: 10,
//         borderRadius: 50,
//         alignItems: 'center',
//         marginVertical: 30,
//     },
//     submitButtonText: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     profileContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     image1: {
//         width: 80,
//         height: 80,
//         borderRadius: 50,
//         marginRight: 20,
//         borderWidth: 2,
//         borderColor: 'blue',
//         marginVertical: 20,

//     },
//     textContainer: {
//         flexDirection: 'column',
//     },
//     profileText: {
//         fontSize: 20,
//         color: '#333',
//         fontWeight: 'bold',
//     },
//     changeText: {
//         color: '#999',
//         fontSize: 16,
//     },
// });

// export default EditProfile;