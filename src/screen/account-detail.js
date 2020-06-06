import React from 'react';
import { Button, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AccountCard from '../component/account-card';

const AccountDetail = () => {
    return (
        <View style={styles.accountListView}>
                <Text>This is Account Detail</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    accountListView : {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    addButtonView: {
        backgroundColor: '#3498DB',
        borderRadius: 400,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    addButton: {
        padding: 20,
        flex: 1,
    }
});

export default AccountDetail;
