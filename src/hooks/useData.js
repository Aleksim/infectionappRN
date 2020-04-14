import {useContext, useEffect} from 'react';
import {Context as PositionContext} from '../context/PositionContext';

export default () => {

    const {state, fetchPositions} = useContext(PositionContext)

    useEffect(()=>{
        fetchPositions()
    },[])

    const data = state.map(i=>i.locations)

    const merged = [].concat.apply([], data)

    const now = Math.floor(new Date() / 1000)

    const threedaysago = now - 259200

    const result = merged.filter(j=>j.timestamp>threedaysago)

    const coordinates = result.map(k=>k.coords)

    return[coordinates]
}