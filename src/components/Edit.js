import react, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity, Modal, TextInput, ScrollView} from 'react-native'
import ImageViewer from './ImageViewer';
import { styles } from '../styles/styles';
import changeName from '../API/ChangeName';
import changeAge from '../API/ChangeAge';
import { Adress } from '../API/config';
import Storage from '../API/Storage';
import * as ImagePicker from 'expo-image-picker'
import { uploadImage } from '../API/ChangePhoto';
import { getPhoto } from '../API/GetPhoto';
import Quiz from './Quiz';

export default function Edit({navigation}){

    const loadProfileScene = () =>{
        navigation.navigate('Profile');
    }
    
    const selectImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          type: 'photo',
          aspect:[3,4],
          allowsEditing: true,
          quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setmyPhoto(result.assets[0].uri);
        } 
        else {
            alert('You did not select any image.');
        }
    };
    

    const [modalWindowName, setModalWindowName] = useState(false);
    const [modalWindowAge, setModalWindowAge] = useState(false);
    const [modalWindowPhoto, setModalWindowPhoto] = useState(false);

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const [myName, setmyName] = useState(Storage('r','name',0));
    const [myAge, setmyAge] = useState(Storage('r','age',0));
    const [myPhoto, setmyPhoto] = useState(Storage('r','photo', 0));
    

    return (
        <View style = {styles.container}>
            <Modal visible = {modalWindowName}>  
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {()=>setModalWindowName(false)}
                    >
                        <Image
                            source={require('../images/arrow-60.png')}
                            style = {[styles.changeBackArrow,{width:30,height:30}]}
                            
                        />
                    </TouchableOpacity>
                    <View style = {styles.modalWindowContent}>
                        <Text style = {styles.modalWindowTitle}>Мое имя:</Text>
                        <TextInput
                            placeholder="Enter your name"
                            style={styles.modalWindowInput}
                            value={userName} 
                            onChangeText={(value) => setUserName(value)}
                        />
                        <TouchableOpacity
                            style={styles.modalWindowConfirmButton}
                            onPress = {()=>{changeName(userName),
                                            setmyName(userName),
                                            setModalWindowName(false)} 
                            }
                        >
                            <Text style={styles.logButtonText}>Подтвердить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal visible = {modalWindowAge}>  
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {()=>setModalWindowAge(false)}
                    >
                        <Image
                            source={require('../images/arrow-60.png')}
                            style = {[styles.changeBackArrow,{width:30,height:30}]}
                            
                        />
                    </TouchableOpacity>
                    <View style = {styles.modalWindowContent}>
                        <Text style = {styles.modalWindowTitle}>Мой возраст:</Text>
                        <TextInput
                            placeholder="Enter new age"
                            style={styles.modalWindowInput}
                            value={userAge} 
                            onChangeText={(value) => setUserAge(value)}
                        />
                        <TouchableOpacity
                            style={styles.modalWindowConfirmButton}
                            onPress = {()=>{changeAge(userAge),
                                            setmyAge(userAge),
                                            setModalWindowAge(false)} 
                                      }
                        >
                            <Text style={styles.logButtonText}>Подтвердить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal visible = {modalWindowPhoto}>  
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {()=>{setModalWindowPhoto(false), setmyPhoto(Storage('r','photo', 0))}}
                    >
                        <Image
                            source={require('../images/arrow-60.png')}
                            style = {[styles.changeBackArrow,{width:30,height:30}]}
                            
                        />
                    </TouchableOpacity>
                    <View style = {styles.modalWindowContent}>
                        <Text style = {styles.modalWindowTitle}>Моё фото:</Text>
                        <View style = {styles.modalWindowPhotoEditContent}>
                            <View style = {styles.modalWindowEditNewPhoto}>
                                <Image 
                                    source={{uri: myPhoto}} 
                                    style={styles.modalWindowProfilePhoto}
                                />
                                <View style = {styles.modalWindowAddNewPhotoButton}>
                                    <TouchableOpacity
                                        onPress={selectImage}
                                    > 
                                        <Image
                                            source = {require('../images/replace-50.png')}
                                            style = {styles.settingRoundIMG}
                                        />
                                    </TouchableOpacity>
                                </View>                
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.modalWindowConfirmButton}
                            onPress = {()=>{
                                uploadImage(selectedImage);
                                setModalWindowPhoto(false);
                                setmyPhoto(selectedImage);
                            }}
                        >
                            <Text style={styles.logButtonText}>Подтвердить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style = {styles.settingsHeader}>
                <Text style = {styles.settingsTitle}>Изменить</Text>
                <TouchableOpacity
                    onPress={() =>{
                        loadProfileScene()
                        //setmyPhoto(getPhoto())
                    }}  
                >
                    <Text style = {styles.settingsAccept}>Готово</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.editContent}>
                <ScrollView>
                    <View style = {styles.settingsBlock}>
                        <View style = {styles.lineSettings}></View>
                        <TouchableOpacity
                            onPress = {()=>setModalWindowName(true)}
                            style = {styles.settingChangeTouch}
                        >
                            <View style  = {styles.dataSetting}>
                                <Text style = {styles.settingTitle}>Имя</Text>
                                <Text style = {styles.settingItem}>{myName}</Text>
                                <Image
                                    source={require('../images/arrow-30.png')}
                                    style = {styles.daraSettingArrow}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.lineSettings}></View>
                        <TouchableOpacity
                            onPress = {()=>setModalWindowAge(true)}
                            style = {styles.settingChangeTouch}
                        >
                            <View style  = {styles.dataSetting}>
                                <Text style = {styles.settingTitle}>Возвраст</Text>
                                <Text style = {styles.settingItem}>{myAge}</Text>
                                <Image
                                    source={require('../images/arrow-30.png')}
                                    style = {styles.daraSettingArrow}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.lineSettings}></View>
                    </View>
                    <View style = {styles.changePhoto}>
                        <Text style = {[styles.settingTitle,{marginBottom:10, fontSize:16}]}>Фото профиля</Text>
                        <View style = {styles.EditPhoto}>
                            <Image
                                source={{uri:myPhoto}}
                                style = {styles.EditPhotoIcon}
                            />
                            <View style = {styles.editRound}>
                                <TouchableOpacity
                                    onPress = {()=>{setModalWindowPhoto(true)}}
                                >
                                    <Image
                                        source={require('../images/edit-64.png')}
                                        style = {styles.settingRoundIMG}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </View>
                    <View style = {[styles.quizBlock,{display: Storage('r','team',0) == null ? 'flex':'none'}]}>
                        {Quiz({navigation})}
                    </View>
                </ScrollView>
            </View>
            
        </View>
    )
}
