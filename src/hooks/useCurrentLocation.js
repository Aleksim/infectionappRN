import {useContext, useEffect} from 'react';
import {Context as LocationContext} from '../context/LocationContext';

export default () => {

    const {state: {currentLocation, locations}} = useContext(LocationContext)

    const currentloc= currentLocation.coords

    return[currentloc]
}