import react, {useEffect, useState} from 'react'
import {View, Text, Image, BackHandler, TouchableOpacity, Button, Alert} from 'react-native'
import { styles } from '../styles/styles';
import {LinearGradient} from 'expo-linear-gradient'
import { Adress } from '../API/config';
import Storage from '../API/Storage';
import { getPhoto } from '../API/GetPhoto';
import onloadPeople from '../API/OnloadPeople';
import PreferencesRender from './PreferencesRender';

export default function Profile({navigation}){

    const [name,setName] = useState([])
    const [age,setAge] = useState([]);
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setName(Storage('r','name',0));
            setAge(Storage('r','age',0));
            setPhoto(Storage('r', 'photo', 0));
        });
        
        return unsubscribe;
    }, [navigation]);
    
    useEffect(() =>{
        
        onloadPeople();
        console.log(Storage('r','team',0));
        
        
        const backAction = () =>{
            BackHandler.exitApp();
            return true;
        }

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        )
        return () => backHandler.remove();

        
    },[])
    

    const loadPeopleScene = () => {
        navigation.navigate('People');
    }
    const loadLikersScene = () => {
        navigation.navigate('Likers');
    }
    const loadSettingsScene = () =>{
        navigation.navigate('Settings');
    }
    const loadEditScene = () =>{
        navigation.navigate('Edit');
    }

    return (
        <View style = {[styles.container]}>
            <View style = {styles.header}>
                <TouchableOpacity
                    style={[styles.settingRound,{}]} 
                >
                    <Image
                        source={require('../images/user-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settingRound}
                    onPress={loadPeopleScene}  
                >
                    <Image
                        source={require('../images/guitar-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settingRound}
                    onPress={loadLikersScene}  
                >
                    <Image
                        source={require('../images/love-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
            </View>

            <View style = {[styles.profileBlock]}>
                
                <View style = {styles.profilePhotoParent}>
                    <Image
                        source = {{uri:photo}}
                        style = {styles.profilePhoto}
                        
                    />
                </View>
                
                <View style = {styles.likersDataPos}>
                    <View style = {styles.profileFooter}>
                        <View style = {styles.profileData}>
                            <Text style = {[styles.profileName, {marginLeft:20}]}>{name}</Text>
                            <Text style = {styles.profileAge}>{age}</Text>
                        </View>
                        <View style = {styles.profilePreferencesBlock}>
                            {
                                Storage('r','team',0) != null ? PreferencesRender(Storage('r','team',0)) : null
                                     
                            }
                        </View>
                        
                    </View>
                </View>
                <View style = {styles.settingsProfile}>
                    <TouchableOpacity
                        style={styles.settingRound}
                        onPress={loadSettingsScene}  
                    >
                        <Image
                            source={require('../images/setting-50.png')}
                            style = {styles.settingRoundIMG2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.settingRound}
                        onPress={() =>{loadEditScene(), Storage('r','all',0)}}
                        
                    >
                        <Image
                            source={require('../images/edit-64.png')}
                            style = {styles.settingRoundIMG2}
                        />
                    </TouchableOpacity>   
                </View>
            </View>
        </View>
    )
}
