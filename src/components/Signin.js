import react from 'react'
import {View, Text, Button, Image, TextInput,TouchableOpacity} from 'react-native'
import { useState } from 'react';
import { styles } from '../styles/styles';
import createUser from '../API/CreateUser'

export default function SignIn({navigation}){

    const loadProfileScene = () => {
        navigation.navigate('Profile');
    }

    let [phone_number, setPhone_number] = useState('');
    let [password, setPassword] = useState('');

    return (
        <View style = {styles.container}>    
            <View style = {styles.contentInputBlock}>
                <Image
                    source={require('../images/guitar-512.png')}
                    style={styles.loginIcon}
                />
                <View style = {styles.logInputBlock}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder="Enter Phone Number"
                        style={styles.logInput}
                        value={phone_number} 
                        onChangeText={(value) => setPhone_number(value)}
                    />
                    <TextInput
                        placeholder="Enter Your Password"
                        style={styles.logInput}
                        secureTextEntry={true}
                        value={password} 
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TouchableOpacity
                        style={styles.logButton}
                        onPress={() => createUser(phone_number,password,navigation)}  
                    >
                        <Text style={styles.logButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
