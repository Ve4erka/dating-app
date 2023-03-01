import react, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, Modal, TextInput} from 'react-native'
import { styles } from '../styles/styles';
import Storage from '../API/Storage';
import changePassword from '../API/ChangePassword';
export default function ChangePassword({navigation}){

    const loadSettingsScene = () =>{
        navigation.navigate('Settings');
    }

    const [modalWindow, setModalWindow] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');

    const [myPassword,setMyPassword] = useState(Storage('r','password',0))

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
                        <Text style = {styles.modalWindowTitle}>Мой пароль:</Text>
                        <TextInput
                            placeholder="Enter new password"
                            style={styles.modalWindowInput}
                            value={password} 
                            onChangeText={(value) => setPassword(value)}
                        />
                        <TextInput
                            placeholder="Confirm new password"
                            style={styles.modalWindowInput}
                            value={passwordConfirm} 
                            onChangeText={(value) => setPasswordConfirm(value)}
                        />
                        <TouchableOpacity
                            style={styles.modalWindowConfirmButton}
                            onPress = {()=>{changePassword(password),
                                            setMyPassword(password),
                                            setModalWindow(false)} 
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
                <Text style = {[styles.changeTitle,{marginRight:'41.1%'}]}>Пароль</Text>    
            </View>
            <View style = {styles.changeContent}>
                <View>
                    <Text style= {styles.changeSecondTitle}>Ваш пароль</Text>
                    <View style = {styles.lineSettings}></View>
                    <View style = {styles.changeValueNow}>
                        <Text style = {styles.changeValueText}>{myPassword}</Text>
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
                    <Text style = {styles.changeValueButtonText}>Установить новый пароль</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}
