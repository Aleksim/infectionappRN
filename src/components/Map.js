// import '../_mockLocation'
import React, {useContext, useEffect} from 'react';
import {StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {Circle, Heatmap} from 'react-native-maps';
import {Text} from 'react-native-elements'
import {Context as LocationContext} from '../context/LocationContext';
import useData from '../hooks/useData'
import useCurrentLocation from '../hooks/useCurrentLocation'


const Map = () =>{


    const {state: {currentLocation}} = useContext(LocationContext)

    // const [coordinates] = useData()

    const [currentloc] = useCurrentLocation()


   if (!currentLocation){
       return <ActivityIndicator size = "large" style={{marginTop: 200}}/>
   }

    return(
        !currentloc ? null :
        <MapView 
        provider="google"
        style = {styles.map}
        initialRegion = {{
            //latitude ja longitude on tuolla coords objektissa niin voidaan laittaa ne tolleen
            // ...currentLocation.coords,
            latitude:60.149999376,
            longitude:24.868663192,
            // latitude:currentloc.coords.latitude,
            // longitude:currentloc.coords.longitude,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        //whenever we update this region property, the map is going to automatically update itself and recenter on the user and rezoom as well.
        region={{
            // ...currentLocation.coords,
            latitude:60.149999376,
            longitude:24.871663192,
            latitudeDelta:0.05,
            longitudeDelta:0.05
        }}
         >
             <Circle
                center={currentLocation.coords}
                radius={1}
                strokeColor="#21243d"
                fillColor="#21243d"
             />

        {/* {coordinates.length<1 ? null :             
        <Heatmap 
                points = {coordinates}
                radius={40}
                opacity={1}
                gradient={{
                    colors:["navy", "blue", "green", "yellow", "red" ],
                    startPoints:[0.01, 0.04, 0.1, 0.45, 0.5],
                     colorMapSize: 2000
                }}
            > 
            </Heatmap>
        } */}
        </MapView>
    
    )
}

const styles = StyleSheet.create({

    map:{
        height:1000
    },
    container:{
        flex: 1,
        backgroundColor: '#21243d'
    },
})

export default Map;
