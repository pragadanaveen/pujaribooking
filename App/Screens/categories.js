import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import design from '../Images/bddesign.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../Components/api';

const Categories = ({ navigation, route }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCatelist();
    }, []);

    const getCatelist = async () => {

        const resp = await api.get('categories');
        setCategories(resp.data.data);
        setTotalPages(resp.data.last_page);
        setCurrentPage(resp.data.current_page);
        // setTotalPages(resp.data.current_page);
    };
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
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
                                {/* <Text style={styles.text}>{category.pooja_id}</Text> */}
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
                        <Text>Loading........</Text>
                    )}
                </View >
            </ScrollView >
            {totalPages > 1 && (
                <View style={styles.paginationContainer}>
                    <TouchableOpacity
                        style={[styles.button, { marginRight: 10 }]}
                        onPress={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <Text style={styles.pageInfo}>Page {currentPage} of {totalPages}</Text>
                    <TouchableOpacity
                        style={[styles.button, { marginLeft: 10 }]}
                        onPress={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View >
            )}
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
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    pageInfo: {
        fontSize: 16,
        marginHorizontal: 10,
        color: '#000'
    },
    buttonview: {
        marginTop: 15,
        alignItems: 'center'
    },
    loginButton: {
        marginBottom: 10,
        width: '25%',
        height: 40,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },

});

export default Categories;