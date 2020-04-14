
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from './src/screens/MapScreen';
import Checklist from './src/screens/Checklist';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as PositionProvider} from './src/context/PositionContext'

const switchNavigator = createSwitchNavigator(

  {
    mainFlow: createBottomTabNavigator(
      {
      Main: TrackCreateScreen,
       Map: MapScreen,
       Checklist: Checklist
      }
    )
  }

)

const App = createAppContainer(switchNavigator)

export default()=>{

  return(
    <PositionProvider>
    <LocationProvider>
      <App ref={navigator=>{
        setNavigator(navigator)
      }}/>
    </LocationProvider>
    </PositionProvider>
  )
}
