import react, {useEffect, useState} from 'react'
import {View, Text, Button, Image, TextInput,TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles';
import {LinearGradient} from 'expo-linear-gradient'
import onloadPeople from '../API/OnloadPeople';
import Storage from '../API/Storage';
import setCheck from '../API/SetCheck';


export default function People({navigation}){

    const [name,setName] = useState(Storage('r', 'OnloadUsername', 0));
    const [age,setAge] = useState(Storage('r', 'OnloadUserage',0));
    const [photo, setPhoto] = useState(Storage('r','OnloadUserphoto',0));

    const loadProfileScene = () => {
        navigation.navigate('Profile');
    }
    const loadLikersScene = () => {
        navigation.navigate('Likers');
    }
    
    return (
        <View style = {[styles.container]}>
            <View style = {styles.header}>
                <TouchableOpacity
                    style={[styles.settingRound]}
                    onPress={loadProfileScene} 
                >
                    <Image
                        source={require('../images/user-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.settingRound]}
                >
                    <Image
                        source={require('../images/guitar-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.settingRound]}
                    onPress={loadLikersScene}  
                >
                    <Image
                        source={require('../images/love-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
            </View>
            <View style = {[styles.profileBlock, {height:600, marginTop:10}]}>
                <View style = {[styles.profilePhotoParent, {height:600}]}>
                    <Image
                        //source={require('../images/woman.jpg')}
                        source = {{uri:photo}}
                        style = {styles.profilePhoto}
                        
                    />
                </View> 
                <View style = {styles.likersDataPos}>
                    <View style = {[styles.profileFooter,{marginBottom:20}]}>
                        <View style = {styles.profileData}>
                            <Text style = {[styles.profileName, {marginLeft:20}]}>{name}</Text>
                            <Text style = {styles.profileAge}>{age}</Text>
                        </View>
                        <View style = {styles.buttonsBlock}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setCheck('skip');
                                    onloadPeople();
                                    setTimeout(function callback(){
                                        setName(Storage('r', 'OnloadUsername', 0));
                                        setAge(Storage('r', 'OnloadUserage',0));
                                        setPhoto(Storage('r','OnloadUserphoto',0));
                                    },1000);
                                    
                                }}
                            >
                                <View style = {styles.checkButton}>
                                    <Image
                                        source = {require('../images/cross-60.png')}
                                        style = {styles.checkButtonPhoto}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{
                                    setCheck('like');
                                    onloadPeople();
                                }}
                            >
                                <View style = {[styles.checkButton, {borderColor:'#39FF00', paddingTop:4}]}>
                                    <Image
                                        source = {require('../images/heart-96.png')}
                                        style = {[styles.checkButtonPhoto, {width:44, height:44}]}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>         
                </View>
            </View>
        </View>
    )
}
