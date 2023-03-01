import react from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react';
import deleteUser from '../API/DeleteUser';
import { styles } from '../styles/styles';
import Storage from '../API/Storage';

export default function Settings({navigation}){

    const loadProfileScene = () =>{
        navigation.navigate('Profile');
    }
    const loadLoginScene = () =>{
        navigation.navigate('Login');
    }
    const loadChangePhoneNumberScene = () => {
        navigation.navigate('ChangePhoneNumber');
    }
    const loadChangePasswordScene = () => {
        navigation.navigate('ChangePassword');
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setmyLogin(Storage('r','phoneNumber',0));
        });
        
        return unsubscribe;
    }, [navigation]);

    const [myLogin, setmyLogin] = useState(Storage('r','phoneNumber',0));

    return (
        <View style = {styles.container}>
            <View style = {styles.settingsHeader}>
                <Text style = {styles.settingsTitle}>Настройки</Text>
                <TouchableOpacity
                    onPress={loadProfileScene}  
                >
                    <Text style = {styles.settingsAccept}>Готово</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.settingsBlock}>
                <View style = {styles.lineSettings}></View>
                <TouchableOpacity
                    style = {styles.settingChangeTouch}
                    onPress = {loadChangePhoneNumberScene}
                >
                    <View style  = {styles.dataSetting}>
                        <Text style = {styles.settingTitle}>Номер телефона</Text>
                        <Text style = {styles.settingItem}>{myLogin}</Text>
                        <Image
                            source={require('../images/arrow-30.png')}
                            style = {styles.daraSettingArrow}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {styles.lineSettings}></View>
                <TouchableOpacity
                    style = {styles.settingChangeTouch}
                    onPress = {loadChangePasswordScene}
                >
                    <View style  = {styles.dataSetting}>
                        <Text style = {styles.settingTitle}>Пароль</Text>
                        <Text style = {styles.settingPassword}>.............</Text>
                        <Image
                            source={require('../images/arrow-30.png')}
                            style = {styles.daraSettingArrow}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {styles.lineSettings}></View>
            </View>
            <View style = {styles.settingsFooter}>
                <View style = {styles.lineSettings}></View>
                <TouchableOpacity 
                    style = {styles.accountOption}
                    onPress = {loadLoginScene}
                >
                    <Text style = {styles.accountOptionText}>Выйти</Text>
                </TouchableOpacity>
                <View style = {styles.lineSettings}></View>
                <Image
                    source={require('../images/guitar-512.png')}
                    style = {styles.settingsFooterIcon}
                />
                <View style = {styles.lineSettings}></View>
                <TouchableOpacity
                    onPress = {()=>deleteUser(navigation)}
                >
                    <View style = {styles.accountOption}>
                        <Text style = {styles.accountOptionText}>Удалить аккаунт</Text>
                    </View>
                </TouchableOpacity>
                <View style = {styles.lineSettings}></View>
            </View>
        </View>
    )
}
