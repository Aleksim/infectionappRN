import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as SicknessContext} from '../context/SicknessContext';

export default () => {
    const{ createPosition1, createPosition2, createPosition3, createPosition4, createPosition5 } = useContext(PositionContext)

    const {state: {currentLocation}, reset} = useContext(LocationContext)

    const {state:{sickness}} = useContext(SicknessContext)

    let call = null

    //Helper funktiot
    const savePositionToHealthies = async () => {
        await createPosition2(currentLocation);
        reset()
    }

    const savePositionToCovids =  async() => {
        await createPosition3(currentLocation);
        reset()
     }

     const savePositionToRecovereds = async () => {
        await createPosition4(currentLocation);
        reset()
     }

     const savePositionToSicks = async () => {
        await createPosition5(currentLocation);
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