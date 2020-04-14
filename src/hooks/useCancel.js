import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';

export default () => {

    const {state: {currentLocation},
    reset
} = useContext(LocationContext)

    const cancelPosition = () => {
       reset()
    }

    return[cancelPosition];
}