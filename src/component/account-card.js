import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const AccountCard = () => {
    // Temp object
    const account = {
        id: '123',
        title: 'Gmail',
        url: 'https://mail.google.com',
        username: 'email.ketu',
        email: 'email.ketu@gmail.com',
        password: 'password'
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.card}>
            {/* Card Header  */}
            <View style={styles.cardHeaderView}>
                <Text style={{...styles.cardText, ...styles.cardHeaderText}}>{account.title} - {account.url}</Text>
            </View>
            {/* Card Body */}
            <View style={styles.cardBodyView}>
                { account.email !== '' &&
                <View style={styles.cardBodyView1}>
                    {/* Render if email available  */}
                    <Text style={{...styles.cardText, fontWeight: 'bold'}}>Email</Text>
                    <Text style={{...styles.cardText}}>{account.email}</Text>
                </View>}
        
                { account.username !== '' &&
                <View style={styles.cardBodyView2}>
                    {/* Render if username available  */}
                    <Text style={{...styles.cardText, fontWeight: 'bold'}}>Username</Text>
                    <Text style={{...styles.cardText}}>{account.username}</Text>
                </View>}

                <View style={styles.cardBodyView3}>
                    <View style={styles.cardBodyView3_1}>
                        <Text style={{...styles.cardText, fontWeight: 'bold'}}>Password</Text>
                    </View>
                    <View style={styles.cardBodyView3_2}>
                        <Text style={{...styles.cardText}}>{showPassword ? account.password : '******'}</Text>
                    </View>
                    <View style={styles.cardBodyView3_3}>
                        <TouchableOpacity style={{...styles.cardFooterButton, padding: 5}} onPress={() => toggleShowPassword()}>
                            <Text style={{...styles.cardText}}>{showPassword ? 'Hide' : 'Show'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Card Footer */}
            <View style={styles.cardFooterView}>
                <TouchableOpacity style={styles.cardFooterButton}>
                    <Text style={{...styles.cardText}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.cardFooterButton, backgroundColor: '#ff0000aa'}}>
                    <Text style={{...styles.cardText, color: '#ffffff'}}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#aeaeae',
        borderStyle: 'solid',
        overflow: 'hidden',
        borderRadius: 10,
        margin: 5,
        marginBottom: 10,
        height: 250,
    },
    cardText: {
        fontFamily: 'monospace'
    },
    cardHeaderView: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        borderBottomWidth: 0,
        borderColor: '#aeaeae',
        borderStyle: 'solid',
    },
    cardHeaderText: {
        fontWeight: '800'
    },
    cardBodyView: {
        flex: 2,
        padding: 5,
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        borderStyle: 'solid',
    },
    cardBodyView1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardBodyView2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardBodyView3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardBodyView3_1: {
        flex: 1
    },
    cardBodyView3_2: {
        flex: 1
    },
    cardFooterView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderColor: '#aeaeae',
        borderStyle: 'solid',
    },
    cardFooterButton: {
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AccountCard;
