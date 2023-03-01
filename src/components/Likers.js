import react from 'react'
import {View, Text, Button, Image, TextInput,TouchableOpacity, ScrollView} from 'react-native'
import { styles } from '../styles/styles';

export default function Likers({navigation}){

    const loadProfileScene = () => {
        navigation.navigate('Profile');
    }
    const loadPeopleScene = () => {
        navigation.navigate('People');
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
                    onPress={loadPeopleScene}  
                >
                    <Image
                        source={require('../images/guitar-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.settingRound]} 
                >
                    <Image
                        source={require('../images/love-64.png')}
                        style = {styles.settingRoundIMG}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.likersContent}>
                <ScrollView style={styles.scrollView}>
                    <View style = {styles.likersItem}>
                        <Image
                            source={require('../images/woman-1.jpg')}
                            style = {styles.likersPhoto}
                            blurRadius = {90}
                        />
                        <View style = {styles.likersDataPos}>
                            <View style = {styles.likersData}>
                                <Text style = {styles.profileName}>Саша Бортич</Text>
                                <Text style = {styles.profileAge}>28</Text>
                            </View>
                            <View style = {styles.likersCallRound}>
                                <Image
                                    source={require('../images/call-50.png')}
                                    style = {styles.likersCall}
                                />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.likersItem}>
                        <Image
                            source={require('../images/man-4.webp')}
                            style = {styles.likersPhoto}
                        />
                        <View style = {styles.likersDataPos}>
                            <View style = {styles.likersData}>
                                <Text style = {styles.profileName}>Чонгук</Text>
                                <Text style = {styles.profileAge}>25</Text>
                            </View>
                            <View style = {styles.likersCallRound}>
                                <Image
                                    source={require('../images/call-50.png')}
                                    style = {styles.likersCall}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

