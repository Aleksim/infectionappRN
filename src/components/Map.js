// import '../_mockLocation'
import React, {useContext, useEffect} from 'react';
import {StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {Circle, Heatmap} from 'react-native-maps';
import {Text} from 'react-native-elements'
import {Context as LocationContext} from '../context/LocationContext';
import useHealthiesData from '../hooks/useHealthiesData'
import useCovidsData from '../hooks/useCovidsData'
import useSicksData from '../hooks/useSicksData'
import useRecoveredsData from '../hooks/useRecoveredsData'
import useCurrentLocation from '../hooks/useCurrentLocation'


const Map = () =>{


    const {state: {currentLocation}} = useContext(LocationContext)

    const [sicksCoordinates] = useSicksData()
    const [healthiesCoordinates] = useHealthiesData()
    const [covidsCoordinates] = useCovidsData()
    const [recoveredsCoordinates] = useRecoveredsData()

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


        {/* healthies heatmap */}
            {healthiesCoordinates.length<1 ? null :             
                <Heatmap 
                    points = {healthiesCoordinates}
                    radius={40}
                    opacity={1}
                    gradient={{
                        colors:['rgba(33,102,172,0)', 'rgb(104,208,111)', 'rgb(210,240,218)', 'rgb(200,253,221)', 'rgb(99,240,160)'],
                        startPoints:[0.2, 0.4, 0.6, 0.8, 1],
                        colorMapSize: 2000
                    }}
                > 
                </Heatmap>
            }
            {/* covids heatmap */}
            {covidsCoordinates.length<1 ? null :             
                <Heatmap 
                        points = {covidsCoordinates}
                        radius={40}
                        opacity={1}
                        gradient={{
                            colors:['rgba(33,102,172,0)', 'rgb(103,169,207)', 'rgb(209,229,240)', 'rgb(253,219,199)', 'rgb(239,138,98)' ],
                            startPoints:[0.2, 0.4, 0.6, 0.8, 1],
                            colorMapSize: 2000
                        }}
                    > 
                </Heatmap>
                }
        
            {/* recovereds heatmap */}
            {recoveredsCoordinates.length<1 ? null :             
                <Heatmap 
                        points = {recoveredsCoordinates}
                        radius={40}
                        opacity={1}
                        gradient={{
                            colors:['rgba(33,102,172,0)', '#7268D0', '#D2E7F0', '#C8E8FD', '#6464FA' ],
                            startPoints:[0.2, 0.4, 0.6, 0.8, 1],
                            colorMapSize: 2000
                        }}
                    > 
                </Heatmap>
                }
        
        {/* sicks heatmap */}
            {sicksCoordinates.length<1 ? null :             
                <Heatmap
                        points = {sicksCoordinates}
                        radius={40}
                        opacity={1}
                        gradient={{
                            colors:['rgba(33,102,172,0)', 'rgb(103,169,207)', 'rgb(240,234,210)', 'rgb(253,242,200)', 'rgb(240,117,99)' ],
                            startPoints:[0.2, 0.4, 0.6, 0.8, 1],
                            colorMapSize: 2000
                        }}
                    > 
                </Heatmap>
                }



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
