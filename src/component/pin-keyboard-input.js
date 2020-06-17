import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const PinKeyboardInput = ({value, onPress}) => {
    return (
            <TouchableOpacity onPress={() => onPress(value)} style={styles.button}>
                <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#aeaeae',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    }
});

export default PinKeyboardInput;
