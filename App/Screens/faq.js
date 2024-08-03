import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import manii from '../Images/bddesign.jpg';
// const manii = require('../images/bddesign.jpg');


const faqData = [
    { id: '1', question: 'Which app features a book on the type of pooja?', answer: 'morning' },
    { id: '2', question: 'What is the role of a priest in religious ceremonies?', answer: 'A Priest plays a central role in conducting religious Ceremonies, offering prayers, and guiding the community in matters of faith.' },
    { id: '3', question: 'How can I request the services of a priest for a specific ceremony or event?', answer: 'You can typically contact your local religious institution or use our app to find and connect with available priests for your specific needs.' },
    { id: '4', question: 'Can I pay online?', answer: 'Yes, you can.' },
];

// Uncomment the following line if you have the image

function FaqScreen({ navigation }) {
    const [expandedIds, setExpandedIds] = useState([]);

    const toggleExpand = (id) => {
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.questionContainer}>
                <Text style={styles.question}>{item.question}</Text>
                <Icons
                    name={expandedIds.includes(item.id) ? 'chevron-up' : 'chevron-down'}
                    size={16}  // Adjust the size here
                    color="#000"
                    style={styles.toggleSymbol}
                />
            </TouchableOpacity>
            {expandedIds.includes(item.id) && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Uncomment the following line if you have the image */}
            <Image source={manii} style={styles.image} />
            <View style={styles.common}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.faqs}>FAQ'S</Text>
            </View>
            <ScrollView style={styles.loop}>
                <FlatList
                    data={faqData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                />
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    listContent: {
        padding: 20,
    },
    faqItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',  // Line color
        paddingBottom: 10,
    },
    questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        color: "#000",
    },
    toggleSymbol: {
        marginLeft: 10,
    },
    answer: {
        marginTop: 5,
        borderRadius: 5,
        color: "#000",
        fontSize: 16,
    },
    loop: {
        backgroundColor: "#fff",
        borderRadius: 20,
        marginHorizontal: 20,
        alignSelf: 'center',
        width: '92%',
        position: 'absolute',
        top: 200,
        shadowColor: 'skyblue',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    toggleSymbol: {
        fontSize: 25,
        color: "black",
    },
    common: {
        left: 10,
        top: 25,
        position: 'absolute',
        flexDirection: 'row',
    },
    faqs: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default FaqScreen;