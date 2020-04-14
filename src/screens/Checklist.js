import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import {Feather} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const Checklist = () =>{


    let [fontsLoaded] = useFonts({
        "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
        "Montserrat-Light": require('../../assets/fonts/Montserrat-Light.ttf'),
     });



     if(!fontsLoaded){
        return <AppLoading/>
    }else{
    return(
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
            <LinearGradient colors={['#000000','#1A1A1A']} style={styles.linearGradientStyle}>
                <View style={styles.content}>

                    {/* <Text style= {styles.topicItem}>
                            Protective Measures Checklist from WHO (Updated 2nd of April 2020):
                    </Text> */}


                    <View style={styles.bulletContainer}>

                        <View style={styles.firstBulletContainer}>
                            <View style={styles.iconAndTextBullet}>
                                <AntDesign name="check" size={25} color="#ECECEC"/> 
                                <Text style={styles.iconAndTextBulletTextItem}>Wash your hands frequently</Text>
                            </View>
                            <View>
                                <Text style={styles.iconAndTextBulletTextDescriptionItem}>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</Text>
                            </View>
                        </View>
{/* 
                        <View style={styles.firstBulletPointContainer} >
                                    <AntDesign name="check" size={25} color="#ECECEC" />
                                    <Text style={styles.bulletPointText}>100% anonymous.</Text>
                        </View> */}

                        <View style={styles.firstBulletContainer}>
                            <View style={styles.iconAndTextBullet}>
                                <AntDesign name="check" size={25} color="#ECECEC"/>
                                <Text style={styles.iconAndTextBulletTextItem}>Maintain social distancing</Text>
                            </View>
                            <View>
                                <Text style={styles.iconAndTextBulletTextDescriptionItem}>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</Text>
                            </View>
                        </View>


                        <View style={styles.firstBulletContainer}>
                            <View style={styles.iconAndTextBullet}>
                                <AntDesign name="check" size={25} color="#ECECEC"/>
                                <Text style={styles.iconAndTextBulletTextItem}>Avoid touching eyes, nose and mouth</Text>
                            </View>
                            <View>
                                <Text style={styles.iconAndTextBulletTextDescriptionItem}>Hands touch many surfaces and can pick up viruses.</Text>
                            </View>
                        </View>

                        <View style={styles.firstBulletContainer}>
                            <View style={styles.iconAndTextBullet}>
                                <AntDesign name="check" size={25} color="#ECECEC"/>
                                <Text style={styles.iconAndTextBulletTextItem}>Practice respiratory hygiene</Text>
                            </View>
                            <View>
                                <Text style={styles.iconAndTextBulletTextDescriptionItem}>Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately</Text>
                            </View>
                        </View>

                        <View style={styles.firstBulletContainer}>
                            <View style={styles.iconAndTextBullet}>
                                <AntDesign name="check" size={25} color="#ECECEC"/>
                                <Text style={styles.iconAndTextBulletTextItem}>If you have fever, cough and difficulty breathing, seek medical care early</Text>
                            </View>
                            <View>
                                <Text style={styles.iconAndTextBulletTextDescriptionItem}>Stay home if you feel unwell.</Text>
                            </View>
                        </View>

                    </View>
                    
                    <View style={styles.shareContainer}>
                        <Feather style={styles.shareIconItem} name="send" size={30} color="white" />
                        <Text style={styles.shareTextItem}>Share the checklist</Text>
                    </View>

                </View>

            </LinearGradient>
        </SafeAreaView>
    )}

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
        linearGradientStyle:{
            flex: 1
        },

            content:{
                flex: 1,
                            },
                topicItem:{
                    marginTop: 6,
                    flex: 1,
                    fontSize: 17,
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Montserrat-Bold'
                    // borderWidth:1,
                    // borderColor: 'red'

                },
                bulletContainer:{
                    flex: 10,
                    justifyContent: 'space-around',
                    // borderWidth:1,
                    // borderColor: 'red'

                },
                    firstBulletContainer:{
                        // borderWidth:1,
                        // borderColor: 'green'

                    },
                        iconAndTextBullet:{
                            // borderWidth:1,
                            // borderColor: 'white',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginHorizontal: 20
                        },

                            iconAndTextBulletTextItem:{
                                color: 'white',
                                fontSize: 15,
                                marginLeft: 20,
                                fontFamily: 'Montserrat-Bold'
                            },

                            iconAndTextBulletTextDescriptionItem:{
                                color: '#ECECEC',
                                justifyContent: 'center',
                                marginHorizontal: 20,
                                fontFamily: 'Montserrat-Light'
                            },
                shareContainer:{
                    flex: 1,
                    // borderWidth:1,
                    // borderColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // // marginTop: 30
                },
                    shareTextItem:{
                        // borderWidth:1,
                        // borderColor: 'red',
                        color: '#fff',
                        marginBottom: 5,
                        fontWeight: 'bold',
                    },
                    shareIconItem:{
                        marginRight: 15
                        // borderWidth:1,
                        // borderColor: 'red'

                    }



});

Checklist.navigationOptions = {
    title: 'Checklist',
    tabBarIcon: <MaterialCommunityIcons name="information-outline" size={30} />
}
export default Checklist;