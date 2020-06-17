import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PinKeyboardInput from '../component/pin-keyboard-input';

const Pin = () => {
    const navigation = useNavigation();
    const [pin, setPin] = useState([]);

    const enterPin = value => {
        let p = pin;
        if(value !== 'x' && value !== 'OK' && p.length < 4) {
            p.push(value);
            setPin(() => [...p]);
        }
        else if(value === 'x') {
            p.splice(-1,1);
            setPin(() => [...p]);
        }
        else if(value === 'OK') {
            navigation.navigate('Main');
        }
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.pinContainer}>
                <Text style={styles.pin}>{pin[0] ? '*' : '-'}</Text>
                <Text style={styles.pin}>{pin[1] ? '*' : '-'}</Text>
                <Text style={styles.pin}>{pin[2] ? '*' : '-'}</Text>
                <Text style={styles.pin}>{pin[3] ? '*' : '-'}</Text>
            </View>
            <View style={styles.keyboardContainer}>
                <View style={styles.keyboardRow}>
                    <PinKeyboardInput value={1} onPress={enterPin} />
                    <PinKeyboardInput value={2} onPress={enterPin} />
                    <PinKeyboardInput value={3} onPress={enterPin} />
                </View>
                <View style={styles.keyboardRow}>
                    <PinKeyboardInput value={4} onPress={enterPin} />
                    <PinKeyboardInput value={5} onPress={enterPin} />
                    <PinKeyboardInput value={6} onPress={enterPin} />
                </View>
                <View style={styles.keyboardRow}>
                    <PinKeyboardInput value={7} onPress={enterPin} />
                    <PinKeyboardInput value={8} onPress={enterPin} />
                    <PinKeyboardInput value={9} onPress={enterPin} />
                </View>
                <View style={styles.keyboardRow}>
                    <PinKeyboardInput value={'x'} onPress={enterPin} />
                    <PinKeyboardInput value={0} onPress={enterPin} />
                    <PinKeyboardInput value={'OK'} onPress={enterPin} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    pinContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    pin: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    keyboardContainer: {
        flex: 4,
    },
    keyboardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default Pin;
