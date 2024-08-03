import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import back from '../Images/bddesign.jpg';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <Image source={back} style={styles.main} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Terms & Conditions
                </Text>
            </View>
            <View style={styles.box}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.tandc}>
                        Please read these terms and conditions carefully before using Our Service.

                        Interpretation and Definitions
                        ------------------------------

                        Interpretation
                        ~~~~~~~~~~~~~~

                        The words of which the initial letter is capitalized have meanings defined
                        under the following conditions. The following definitions shall have the same
                        meaning regardless of whether they appear in singular or in plural.

                        Definitions
                        ~~~~~~~~~~~

                        For the purposes of these Terms and Conditions:

                        * Application means the software program provided by the Company downloaded
                        by You on any electronic device, named priest

                        * Application Store means the digital distribution service operated and
                        developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play
                        Store) in which the Application has been downloaded.

                        * Affiliate means an entity that controls, is controlled by or is under
                        common control with a party, where "control" means ownership of 50% or
                        more of the shares, equity interest or other securities entitled to vote
                        for election of directors or other managing authority.

                        Acknowledgment
                        --------------

                        These are the Terms and Conditions governing the use of this Service and the
                        agreement that operates between You and the Company. These Terms and
                        Conditions set out the rights and obligations of all users regarding the use
                        of the Service.

                        Your access to and use of the Service is conditioned on Your acceptance of and
                        compliance with these Terms and Conditions. These Terms and Conditions apply
                        to all visitors, users and others who access or use the Service.

                        By accessing or using the Service You agree to be bound by these Terms and
                        Conditions. If You disagree with any part of these Terms and Conditions then
                        You may not access the Service.

                        You represent that you are over the age of 18. The Company does not permit
                        those under 18 to use the Service.

                        Your access to and use of the Service is also conditioned on Your acceptance
                        of and compliance with the Privacy Policy of the Company. Our Privacy Policy
                        describes Our policies and procedures on the collection, use and disclosure of
                        Your personal information when You use the Application or the Website and
                        tells You about Your privacy rights and how the law protects You. Please read
                        Our Privacy Policy carefully before using Our Service.

                        Links to Other Websites
                        -----------------------

                        Our Service may contain links to third-party web sites or services that are
                        not owned or controlled by the Company.

                        The Company has no control over, and assumes no responsibility for, the
                        content, privacy policies, or practices of any third party web sites or
                        services. You further acknowledge and agree that the Company shall not be
                        responsible or liable, directly or indirectly, for any damage or loss caused
                        or alleged to be caused by or in connection with the use of or reliance on any
                        such content, goods or services available on or through any such web sites or
                        services.

                        We strongly advise You to read the terms and conditions and privacy policies
                        of any third-party web sites or services that You visit.
                        Governing Law
                        -------------

                        The laws of the Country, excluding its conflicts of law rules, shall govern
                        this Terms and Your use of the Service. Your use of the Application may also
                        be subject to other local, state, national, or international laws.

                        Disputes Resolution
                        -------------------

                        If You have any concern or dispute about the Service, You agree to first try
                        to resolve the dispute informally by contacting the Company.

                        For European Union (EU) Users
                        -----------------------------

                        If You are a European Union consumer, you will benefit from any mandatory
                        provisions of the law of the country in which You are resident.

                        United States Legal Compliance
                        ------------------------------

                        You represent and warrant that (i) You are not located in a country that is
                        subject to the United States government embargo, or that has been designated
                        by the United States government as a "terrorist supporting" country, and (ii)
                        You are not listed on any United States government list of prohibited or
                        restricted parties.

                        Changes to These Terms and Conditions
                        -------------------------------------

                        We reserve the right, at Our sole discretion, to modify or replace these Terms
                        at any time. If a revision is material We will make reasonable efforts to
                        provide at least 30 days' notice prior to any new terms taking effect. What
                        constitutes a material change will be determined at Our sole discretion.

                        By continuing to access or use Our Service after those revisions become
                        effective, You agree to be bound by the revised terms. If You do not agree to
                        the new terms, in whole or in part, please stop using the website and the
                        Service.

                        Contact Us
                        ----------

                        If you have any questions about these Terms and Conditions, You can contact
                        us:


                    </Text>
                </ScrollView>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        // backgroundColor: 'skyblue',
        // height: 250,
        width: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: -9
    },
    backButton: {
        position: 'relative',
        left: 10,
        top: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        paddingVertical: 20,
    },
    tandc: {
        fontSize: 14,
        color: '#000',
        lineHeight: 20,
        zIndex: 999,
        textAlign: 'justify',
    },
    box: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 40
    },
});

export default About;