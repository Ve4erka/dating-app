import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View } from 'react-native';
import { styles } from '../styles/styles';

const Test = () => {
  return (
    <View style={[styles2.card, styles2.shadowProp]}>
        <View>
          <Text style={styles2.heading}>
            React Native Box Shadow (Shadow Props)
          </Text>
        </View>
        <Text>
          Using the elevation style prop to apply box-shadow for iOS devices
        </Text>
      </View>
  );
}

const styles2 = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    width:300,
    height:300,
  },
  shadowProp: {
    elevation:100,
    shadowColor:'#52006A',
  },
});

export default Test;
