import {useContext, useEffect} from 'react';
import {Context as SicksContext} from '../context/SicksContext';

export default () => {

    const {state, fetchSicks} = useContext(SicksContext)

    useEffect(()=>{
        fetchSicks()
    },[])

    const data = state.map(i=>i.locations)

    const merged = [].concat.apply([], data)

    const now = Math.floor(new Date() / 1000)

    const threedaysago = now - 259200

    const result = merged.filter(j=>j.timestamp>threedaysago)

    const sicksCoordinates = result.map(k=>k.coords)

    return[sicksCoordinates]
}