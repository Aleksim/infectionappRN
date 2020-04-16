import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import React, { useEffect } from 'react';
import {Button} from 'react-native-elements';
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
                <Button style={styles.buttonItem} titleStyle= {{fontFamily:'Montserrat-Regular'}} title="I'm Not Sick" onPress={savePosition}></Button>
                <Button style={styles.buttonItem} titleStyle= {{fontFamily:'Montserrat-Regular'}} title="I'm Feeling Sick" onPress={savePosition}></Button>
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
