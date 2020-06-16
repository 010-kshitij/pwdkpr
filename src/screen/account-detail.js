import React, {useState} from 'react';
import { Button, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AccountCard from '../component/account-card';

const AccountDetail = () => {
    const route = useRoute();
    const account = route.params?.account;
    const isEditing = account?.id ? true : false;
    const [title, setTitle] = useState(account?.title);
    const [url, setUrl] = useState(account?.url);
    const [username, setUsername] = useState(account?.username);
    const [email, setEmail] = useState(account?.email);
    const [password, setPassword] = useState(account?.password);
    
    const handleSubmit = () => {
        alert(isEditing);
    };

    return (
        <View style={styles.accountDetailView}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.heading}>{route.params?.account ? 'Edit Account -  ' + route.params?.account.title : 'Add a new Account'}</Text>
                <View>
                    <Text style={styles.formLabel}>Title</Text>
                    <TextInput style={styles.formInput} placeholder={'Enter Title of the account'} value={title} onChangeText={(title) => setTitle(title)} />
                    <Text style={styles.formLabel}>URL</Text>
                    <TextInput style={styles.formInput} placeholder={'URL of the account'} value={url} onChangeText={url => setUrl(url)} />
                    <Text style={styles.formLabel}>Username</Text>
                    <TextInput style={styles.formInput} placeholder={'Username(if any) of the account'} value={username} onChangeText={username => setUsername(username)} />
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.formInput} placeholder={'Email(if any) of the account'} value={email} onChangeText={email => setEmail(email)} />
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} placeholder={'Password of the account'} value={password} onChangeText={password => setPassword(password)} />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>{route.params?.account ? 'Update Account' : 'Add Account'}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    accountDetailView : {
        flex: 1,
        padding: 10,
    },
    scrollView: {
        flex: 1,
    },
    heading: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#aeaeae',
        paddingBottom: 15,
        textAlign: 'center'
    },
    formLabel: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    formInput: {
        fontFamily: 'monospace',
        borderWidth: 1,
        borderColor: '#aeaeae',
        marginTop: 5,
        marginBottom: 5,
    },
    submitButton: {
        marginTop: 10,
        backgroundColor: '#3498DB',
        padding: 15,
    },
    submitButtonText: {
        fontFamily: 'monospace',
        color: '#ffffff',
        fontSize: 15
    },
});

export default AccountDetail;
