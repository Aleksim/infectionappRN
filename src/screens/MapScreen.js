import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import {Context as PositionContext} from '../context/PositionContext'
import Map from '../components/Map'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const MapScreen = ({navigation}) =>{

    const {state, fetchPositions} = useContext(PositionContext)

    return(
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <NavigationEvents onWillFocus={fetchPositions} />
            <Map />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
});

MapScreen.navigationOptions = {
    title: 'Map',
    tabBarIcon: <MaterialCommunityIcons name="eye" size={30} />
}

export default MapScreen;