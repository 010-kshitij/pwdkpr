import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.heading}>pwdkpr</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'monospace',
        fontSize: 25 
    }
});

export default Header;
