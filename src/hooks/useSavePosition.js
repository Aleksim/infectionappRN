import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';


export default () => {

    const{ createPosition } = useContext(PositionContext)
    const {state: {currentLocation},
    reset} = useContext(LocationContext)

    const savePosition = async() => {
       await createPosition(currentLocation);
       reset()
    }

    return[savePosition];
}