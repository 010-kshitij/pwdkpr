import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.heading}>&nbsp;</Text>
            <Text style={styles.heading}>pwdkpr</Text>
            <TouchableOpacity style={styles.settingsButton}>
                <FontAwesomeIcon icon={ faCog } size={25} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        alignItems: 'center',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    heading: {
        fontFamily: 'monospace',
        fontSize: 25 
    },
    settingsButton: {
        
    },
});

export default Header;
