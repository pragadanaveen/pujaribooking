import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import design from '../Images/bddesign.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../Components/api';

const Categories = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCatelist();
    }, []);

    const getCatelist = async () => {
        const resp = await api.get('categories');
        setCategories(resp.data.data);

    };

    return (
        <>
            <Image source={design} style={styles.image} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Categories</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.main}>
                    {categories.length > 0 ? (
                        categories.map((category, key) => (

                            <View key={key} style={styles.box}>
                                <Image
                                    source={{ uri: `https://pujaribooking.com/priest/app/webservice/images/${category.image}` }}
                                    style={styles.categoryImage}
                                />
                                <Text style={styles.text} > {category.name}</Text>
                                {/* <Text style={styles.text}>{category.priest_id}</Text> */}
                                {/* <Text style={styles.text}>{category.image}</Text> */}

                                {/* <Text style={styles.text}>{category.createtime}</Text> */}
                            </View>
                        ))
                    ) : (
                        <Text>No categories available</Text>
                    )}
                </View >
            </ScrollView >
        </>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        left: 5,
        fontWeight: '500',
    },
    main: {
        position: 'relative',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
    },
    image: {
        position: 'absolute',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: '45%',
        // height: 250,
        padding: 15,
        margin: 'auto',
        position: 'relative',
        marginBottom: 20
    },
    header: {
        padding: 20,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    categoryImage: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        resizeMode: 'cover',
    },
});

export default Categories;