import react, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, Modal, TextInput, Alert} from 'react-native'
import Storage from '../API/Storage';
import { styles } from '../styles/styles';
import changeLogin from '../API/ChangeLogin';

export default function ChangePhoneNumber({navigation}){

    const loadSettingsScene = () =>{
        navigation.navigate('Settings');
    }

    const [modalWindow, setModalWindow] = useState(false);
    const [phone_number,setPhone_number] = useState('');

    const [myLogin,setmyLogin] = useState(Storage('r','phoneNumber',0))

    return (
        <View style = {styles.container}>
            <Modal visible = {modalWindow}>  
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {()=>setModalWindow(false)}
                    >
                        <Image
                            source={require('../images/arrow-60.png')}
                            style = {[styles.changeBackArrow,{width:30,height:30}]}
                            
                        />
                    </TouchableOpacity>
                    <View style = {styles.modalWindowContent}>
                        <Text style = {styles.modalWindowTitle}>Мой номер:</Text>
                        <TextInput
                            keyboardType='phone-pad'
                            placeholder="Enter new phone number"
                            style={styles.modalWindowInput}
                            value={phone_number} 
                            onChangeText={(value) => setPhone_number(value)}
                        />
                        <TouchableOpacity
                            style={styles.modalWindowConfirmButton}
                            onPress = {()=> {
                                                if (changeLogin(phone_number) == false){
                                                    Alert.alert('Такой логин уже существует!',[
                                                        {text: 'Понятно'}
                                                    ])
                                                }
                                                else{
                                                    setmyLogin(phone_number),
                                                    setModalWindow(false)
                                                }
                                            } 
                            }
                        >
                            <Text style={styles.logButtonText}>Продолжить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style = {styles.changeElementHeader}>
                <TouchableOpacity
                    onPress={loadSettingsScene}
                    style = {styles.changeBackButton}  
                >
                    <Image
                        source={require('../images/arrow-60.png')}
                        style = {styles.changeBackArrow}
                    />
                    <Text style = {styles.changeGoBackText}>Настройки</Text>
                </TouchableOpacity>
                <Text style = {styles.changeTitle}>Номер телефона</Text>    
            </View>
            <View style = {styles.changeContent}>
                <View>
                    <Text style= {styles.changeSecondTitle}>Ваш номер телефона</Text>
                    <View style = {styles.lineSettings}></View>
                    <View style = {styles.changeValueNow}>
                        <Text style = {styles.changeValueText}>{myLogin}</Text>
                        <Image
                            source={require('../images/checkmark-48.png')}
                            style = {styles.changeCheckMark}
                        />
                    </View>
                    <View style = {styles.lineSettings}></View>
                </View>  
                <TouchableOpacity
                    style = {styles.changeValueButton}
                    onPress = {()=>setModalWindow(true)}
                >
                    <Text style = {styles.changeValueButtonText}>Обновить мой номер телефона</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}
