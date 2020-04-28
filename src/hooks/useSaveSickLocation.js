import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as SicknessContext} from '../context/SicknessContext';
import {Context as HealthiesContext} from '../context/HealthiesContext';
import {Context as CovidsContext} from '../context/CovidsContext';
import {Context as RecoveredsContext} from '../context/RecoveredsContext';
import {Context as SicksContext} from '../context/SicksContext';





export default () => {

    const {createHealthies} = useContext(HealthiesContext)

    const {createCovids} = useContext(CovidsContext)

    const {createRecovereds} = useContext(RecoveredsContext)

    const {createSicks} = useContext(SicksContext)


    const{ createPosition1, createPosition2, createPosition3, createPosition4, createPosition5 } = useContext(PositionContext)

    // const {state: {currentLocation}, reset} = useContext(LocationContext)

    const {state: {locations}, reset} = useContext(LocationContext)


    const {state:{sickness}} = useContext(SicknessContext)

    let call = null

    //Helper funktiot
    const savePositionToHealthies = async () => {
        await createHealthies(locations);
        reset()
    }

    const savePositionToCovids =  async() => {
        await createCovids(currentLocation);
        reset()
     }

     const savePositionToRecovereds = async () => {
        await createRecovereds(currentLocation);
        reset()
     }

     const savePositionToSicks = async () => {
        await createSicks(currentLocation);
        reset()
     }


    //  //Mitä hookki palauttaa lopulta
    
    switch(sickness){
        case "I'm not sick":
            call = savePositionToHealthies
            break;
        case "I have COVID-19":
            call = savePositionToCovids
            break;
        case "I have recovered from the COVID-19 virus":
            call = savePositionToRecovereds
            break;
        case "I'm sick":
            call = savePositionToSicks
            break;
        default:
            call = null
    }


    return[call];

}