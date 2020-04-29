// import '../_mockLocation'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import React, {useContext, useCallback} from 'react'
import {StyleSheet, View, Share, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackToggle from '../components/TrackToggle'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import {Feather} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {


   const onShare = async () => {
        // const uri = await getGalleryImageAsync(1);
    
        Share.share(
          {
            title: 'Check this out',
            message: 'Check out this one click solution to track Covid-19. This app is amazing.'
            // url: uri,
          },
          {
            excludedActivityTypes: [
              // 'com.apple.UIKit.activity.PostToWeibo',
              'com.apple.UIKit.activity.Print',
              'com.apple.UIKit.activity.CopyToPasteboard',
              // 'com.apple.UIKit.activity.AssignToContact',
              // 'com.apple.UIKit.activity.SaveToCameraRoll',
              // 'com.apple.UIKit.activity.AddToReadingList',
              // 'com.apple.UIKit.activity.PostToFlickr',
              // 'com.apple.UIKit.activity.PostToVimeo',
              // 'com.apple.UIKit.activity.PostToTencentWeibo',
              'com.apple.UIKit.activity.AirDrop',
              // 'com.apple.UIKit.activity.OpenInIBooks',
              'com.apple.UIKit.activity.MarkupAsPDF',
              // 'com.apple.reminders.RemindersEditorExtension',
              // 'com.apple.mobilenotes.SharingExtension',
              // 'com.apple.mobileslideshow.StreamShareService',
              // 'com.linkedin.LinkedIn.ShareExtension',
              // 'pinterest.ShareExtension',
              // 'com.google.GooglePlus.ShareExtension',
              // 'com.tumblr.tumblr.Share-With-Tumblr',
              // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
            ],
          }
        );
      };



    const {addLocation}=useContext(LocationContext)
    
    let [fontsLoaded] = useFonts({
        "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
        "Montserrat-Light": require('../../assets/fonts/Montserrat-Light.ttf'),
     });

    const callback = useCallback(location=>{
        addLocation(location)
    }, [] )

    
    const [err] = useLocation(isFocused, callback)

    if(!fontsLoaded){
        return <AppLoading/>
    }else{
    return(
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <LinearGradient colors={['#000000','#1A1A1A']} style={styles.linearGradientStyle}>
                <View style={styles.contentStyle}>



                    <View style={styles.heroTextContainer}>
                        <View style={styles.heroHeadLineContainer1}>
                            <Text style={styles.areYouFeelingSickItem}>
                                How are you feeling today?
                            </Text>
                        </View>
                    </View>


            
                    <View style={styles.buttonAndTextContainer}>

                        <View style={styles.buttonContainer}>

                            <TrackToggle/>

                        </View>
                        
                        <View style={styles.bulletPointAndShareContainer}>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.shareContainer} onPress={onShare}>
                        <Feather style={styles.shareIconItem} name="send" size={30} color="white" />
                        <Text style={styles.shareTextItem}>Share to your friends and family</Text>
                    </TouchableOpacity>



                    <View style={styles.errorStyle}>
                        {err ? <Text>Please enable location services from your device's settings</Text>: null}
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
        linearGradientStyle:{
            flex: 1
        },
        contentStyle:{
            flex: 1
        },
            heroTextContainer:{
                flex: 3,
                // borderWidth:1,
                // borderColor: 'white',
                // backgroundColor:'green'
            },
                heroHeadLineContainer1:{
                    flex: 6,
                    // borderWidth:1,
                    // borderColor: 'red',
                    justifyContent: 'center'

                    
                },
                heroHeadLineContainer2:{
                    flex: 3,
                    // borderWidth:1,
                    // borderColor: 'red',
                    justifyContent: 'center'

                    
                },
                    areYouFeelingSickItem:{
                        fontSize: 30,
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginHorizontal: 25,
                        fontFamily: 'Montserrat-Regular'
                        // borderWidth:1,
                        // borderColor: 'red'
                    },
                    descriptionItem1:{
                        marginTop: 10,
                        fontSize: 15,
                        color: '#ECECEC',
                        textAlign: 'center',
                        // borderWidth:1,
                        // borderColor: 'red',
                        marginHorizontal: 20
                    },
                    descriptionItem2:{
                        fontSize: 15,
                        color: '#fff',
                        textAlign: 'center',
                        // borderWidth:1,
                        // borderColor: 'red',
                        marginHorizontal: 20,
                        // fontWeight: 'bold',
                        // marginBottom: 30
                    },

            buttonAndTextContainer:{
                flex: 7,
                // borderWidth:1,
                // borderColor: 'white'
            },

                buttonContainer:{
                    // borderWidth:1,
                    // borderColor: 'red',
                    marginHorizontal: 20
                },

                bulletPointAndShareContainer:{
                    justifyContent:'space-between',
                },

                    bulletPointContainer:{
                        // marginTop: 45,
                        alignItems: 'stretch',
                        justifyContent: "space-around",
                        // borderWidth:1,
                        // borderColor: 'red',
                        marginLeft: 20,
                        marginRight: 20

                    },
                        // firstBulletPointContainer:{
                        //     alignItems: 'center',
                        //     flexDirection: 'row',
                        //     marginBottom: 10
                        // },
                        // secondBulletPointContainer:{
                        //     alignItems: 'center',
                        //     flexDirection: 'row',
                        //     marginBottom: 10
                        // },
                        // thirdBulletPointContainer:{
                        //     alignItems: 'center',
                        //     flexDirection: 'row',
                        //     marginBottom: 10
                        // },
                        //     bulletPointText:{
                        //         color: '#ECECEC',
                        //         marginLeft: 20
                        //     },

                submitButtonContainer:{
                    flex:1,
                    borderWidth:1,
                    borderColor: 'white',
                },


                shareContainer:{
                    flex:1,
                    // borderWidth:1,
                    // borderColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                    shareTextItem:{
                        // borderWidth:1,
                        // borderColor: 'red',
                        color: '#fff',
                        // marginBottom: 5,
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat-Light'
                    },
                    shareIconItem:{
                        marginRight: 15
                        // borderWidth:1,
                        // borderColor: 'red'
                    },
            errorStyle:{
                flex: 1,
                // borderWidth:1,
                // borderColor: 'red',
            }

})

TrackCreateScreen.navigationOptions = {
    title: 'Status',
    tabBarIcon: <MaterialCommunityIcons name="account" size={30} />
}


export default withNavigationFocus(TrackCreateScreen);

