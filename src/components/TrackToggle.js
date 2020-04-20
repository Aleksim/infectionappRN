import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import React, { useEffect } from 'react';
import {Button, CheckBox} from 'react-native-elements';
import { useState, useContext } from 'react';
import {StyleSheet, View} from 'react-native'
import { Context as LocationContext } from '../context/LocationContext';
import useSavePosition from '../hooks/useSavePosition';
import useCancel from '../hooks/useCancel';




const TrackToggle = () => {

    const {state: {currentLocation}} = useContext(LocationContext)
    const [savePosition] = useSavePosition()
    const [cancelPosition] = useCancel()

        //custom fontit tällä
    let [fontsLoaded] = useFonts({
        "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
        "Montserrat-Light": require('../../assets/fonts/Montserrat-Light.ttf'),
     });


     if(!fontsLoaded){
        return <AppLoading/>
    }else{
        return<>
            <View>
                {/* <Button style={styles.buttonItem} titleStyle= {{fontFamily:'Montserrat-Regular'}} title="I'm Not Sick" onPress={()=>{console.log('click')}}></Button>
                <Button style={styles.buttonItem} titleStyle= {{fontFamily:'Montserrat-Regular'}} title="I'm Feeling Sick" onPress={()=>{console.log('click')}}></Button> */}
                <CheckBox
                containerStyle={{backgroundColor:'transparent', borderColor: 'transparent'}}
                textStyle={{fontFamily:'Montserrat-Regular', fontSize: 20, color: '#fff'}}
                title="I'm not sick"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                containerStyle={{backgroundColor:'transparent', borderColor: 'transparent'}}
                textStyle={{fontFamily:'Montserrat-Regular', fontSize: 20, color: '#fff'}}
                title="I'm feeling sick"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                containerStyle={{backgroundColor:'transparent', borderColor: 'transparent'}}
                textStyle={{fontFamily:'Montserrat-Regular', fontSize: 20, color: '#fff'}}
                title="I believe I had COVID-19 but I recovered"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
            </View>
             
        </>
        }
    };
    const styles = StyleSheet.create({
        buttonItem:{
            // borderWidth:1,
            // borderColor: 'red',

            paddingBottom: 10
        },
            saveButtonContainer:{
                marginRight: 20
            },
            cancelButtonContainer:{
            },
    })
export default TrackToggle;
