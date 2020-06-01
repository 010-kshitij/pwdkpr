import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Container from '../component/container';
import Header from '../component/header';
import AccountList from './account-list';

const Main = () => {
    return (
        <Container>
            <Header />
            <View style={styles.searchBarView}>
              <TextInput placeholder={'Search...'} />  
            </View>
            <AccountList />
        </Container>
    );
};

const styles = StyleSheet.create({
    searchBarView: {
        borderBottomWidth: 1,
        borderBottomColor: '#aeaeae',
    }
});

export default Main;
