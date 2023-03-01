import react from 'react'
import { useState } from 'react';
import {View, Text, Button, Image, TextInput,TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles';
import {LinearGradient} from 'expo-linear-gradient'
import loginUser from '../API/LoginUser';
import onloadPeople from '../API/OnloadPeople';

export default function Login({navigation}){
    const loadScene = () =>{
        navigation.navigate('SignIn');
    }
    const loadMainScene = () => {
        navigation.navigate('Profile');
    }

    let [phone_number, setPhone_number] = useState('');
    let [password, setPassword] = useState('');

    return (
        <LinearGradient
            colors = {['#6aeda7','#58fec7','#5ef1ff']}
        >
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
                            onPress={() => {loginUser(phone_number,password,navigation)}}  
                        >
                            <Text style={styles.logButtonText}>Log In</Text>
                        </TouchableOpacity>

                        <Text style = {{color:"#000000a1"}}>У вас нет аккаунта?</Text>
                        <TouchableOpacity
                            onPress={loadScene}  
                        >
                            <Text style={styles.regText}> Создайте!</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}
