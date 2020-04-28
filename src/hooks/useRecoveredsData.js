import {useContext, useEffect} from 'react';
import {Context as RecoveredsContext} from '../context/RecoveredsContext';

export default () => {

    const {state, fetchRecovereds} = useContext(RecoveredsContext)

    useEffect(()=>{
        fetchRecovereds()
    },[])

    const data = state.map(i=>i.locations)

    const merged = [].concat.apply([], data)

    const now = Math.floor(new Date() / 1000)

    const threedaysago = now - 259200

    const result = merged.filter(j=>j.timestamp>threedaysago)

    const recoveredsCoordinates = result.map(k=>k.coords)

    return[recoveredsCoordinates]
}