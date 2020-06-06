import React from 'react';
import { Button, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AccountCard from '../component/account-card';

const AccountList = () => {
    return (
        <View style={styles.accountListView}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
                <AccountCard />
            </ScrollView>
            <View style={styles.addButtonView}>
                <TouchableOpacity style={styles.addButton}>
                    <FontAwesomeIcon icon={faPlus} style={{color: '#ffffff'}} />
                </TouchableOpacity>
            </View>
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

export default AccountList;
