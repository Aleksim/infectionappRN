import {useContext, useEffect} from 'react';
import {Context as HealthiesContext} from '../context/HealthiesContext';

export default () => {

    const {state, fetchHealthies} = useContext(HealthiesContext)

    useEffect(()=>{
        fetchHealthies()
    },[])

    const data = state.map(i=>i.locations)

    const merged = [].concat.apply([], data)

    const now = Math.floor(new Date() / 1000)

    const threedaysago = now - 259200

    const result = merged.filter(j=>j.timestamp>threedaysago)

    const healthiesCoordinates = result.map(k=>k.coords)

    return[healthiesCoordinates]
}