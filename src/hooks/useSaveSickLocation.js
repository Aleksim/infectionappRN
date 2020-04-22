import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as SicknessContext} from '../context/SicknessContext';

export default () => {

    const{ createPosition1, createPosition2, createPosition3, createPosition4 } = useContext(PositionContext)



    const {state: {currentLocation},
    reset} = useContext(LocationContext)

    const {state:{sickness} = useContext(SicknessContext)}

    const savePosition = async() => {
       await createPosition1();
       reset()
    }

    const call //tähän joku ehto että call saa arvokseen oikean funktion.

    return[call];
}