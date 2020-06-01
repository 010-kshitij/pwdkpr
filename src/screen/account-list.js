import React from 'react';
import { Button, StyleSheet, ScrollView, Text, View } from 'react-native';

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
            <View>
                <Button title={'Add New'} />
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
    }
});

export default AccountList;
