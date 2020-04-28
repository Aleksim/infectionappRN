import {useContext, useEffect} from 'react';
import {Context as CovidsContext} from '../context/CovidsContext';

export default () => {

    const {state, fetchCovids} = useContext(CovidsContext)

    useEffect(()=>{
        fetchCovids()
    },[])

    const data = state.map(i=>i.locations)

    const merged = [].concat.apply([], data)

    const now = Math.floor(new Date() / 1000)

    const threedaysago = now - 259200

    const result = merged.filter(j=>j.timestamp>threedaysago)

    const covidsCoordinates = result.map(k=>k.coords)

    return[covidsCoordinates]
}