import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../constants/themes';
import data from '../data/Quizdata';
import { styles } from '../styles/styles';
import Storage from '../API/Storage';
import sendTeam from '../API/SendTeam';

const Quiz = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [simple, setSimple] = useState(0);
    const [team, setTeam] = useState(0);

    const loadProfileScene = () =>{
        navigation.navigate('Profile');
    }

    const validateAnswer = (selectedOption) => {
        setCurrentOptionSelected(selectedOption);
        setIsOptionsDisabled(true);
        if(selectedOption==allQuestions[currentQuestionIndex].options[0]){
            setTeam(team+1);
        }
        else{
            setSimple(simple+1);
        }
        //setShowNextButton(true)    
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            //setShowScoreModal(true)
            setCurrentQuestionIndex(currentQuestionIndex+1);
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setIsOptionsDisabled(false);
            //setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderQuestion = () => {
        return (
            <View>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.white,
                    fontSize: 25
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> {validateAnswer(option), handleNext()}}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: COLORS.whiteOpacity,
                            height: 60, 
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            width:250,
                            marginBottom:20,
                        }}
                        >
                            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={styles.progressBar}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>
                </Animated.View>

            </View>
        )
    }
    const renderQuiz = () =>{
        return(
            <View style = {styles.quizContent}>
                { renderProgressBar()}
                {/* Question */}
                {renderQuestion()}
                {/* Options */}
                {renderOptions()}
            </View>
        )
        
    }
    const renderFinal = () =>{
        return(
            <View style={styles.quizResult}>
                <Text style={styles.quizResultText}>{ simple> team ? 'Вы предпочитаете полагаться на себя' : 'Вы предпочитаете работу в команде' }</Text>           
                <TouchableOpacity
                onPress = {()=>{
                    if (simple>team){
                        Storage('w','team',false)
                        sendTeam(false)
                    }
                    else{
                        Storage('w','team', true)
                        sendTeam(true)
                    }
                    console.log(Storage('r','team',0))
                    loadProfileScene()
                    
                }}  
                style={styles.quizResultButton}>
                    <Text style={{
                        textAlign: 'center', color: COLORS.white, fontSize: 20
                    }}>Понятно</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
       <View>
            {currentQuestionIndex == allQuestions.length ? renderFinal():renderQuiz()}
        </View>
    )
}

export default Quiz