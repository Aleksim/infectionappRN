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













// const TrackToggle = () => {

//     //Mä otan tässä nää action creatorit sieltä Location contextista.
//     const {state: {recording, locations}, startRecording, stopRecording} = useContext(LocationContext)
//     const [saveTrack] = useSaveTrack()
//     const [cancelTrack] = useCancel()

//         //custom fontit tällä
//     let [fontsLoaded] = useFonts({
//         "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
//         "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
//         "Montserrat-Light": require('../../assets/fonts/Montserrat-Light.ttf'),
//      });


//      if(!fontsLoaded){
//         return <AppLoading/>
//     }else{
//         return<>

//             <View>
//                 {!recording? (locations.length? 
//                                 <View style={styles.saveAndCancelContainer}>
//                                     <View style={styles.saveButtonContainer}>
//                                         <Button titleStyle= {{fontFamily:'Montserrat-Regular'}} title="Save Your Trace" onPress={saveTrack} raised/>
//                                     </View>
//                                     <View style={styles.cancelButtonContainer}>
//                                             <Button titleStyle= {{fontFamily:'Montserrat-Light'}} type="outline" title="Cancel" onPress={cancelTrack} raised/>
//                                     </View>
//                                 </View> 
//                     : <Button titleStyle= {{fontFamily:'Montserrat-Regular'}} title="Start Creating Your Trace" onPress={startRecording}></Button>)
//                     :(<Button titleStyle= {{fontFamily:'Montserrat-Light'}} type="outline" title="Stop Creating Your Trace" onPress={stopRecording}></Button>)
//                 }
//             </View>
//         </>
//         }
//     };
//     const styles = StyleSheet.create({
//         saveAndCancelContainer:{
//             // borderWidth:1,
//             // borderColor: 'red',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//             saveButtonContainer:{
//                 marginRight: 20
//             },
//             cancelButtonContainer:{
//             },
//     })
// export default TrackToggle;