import {useContext} from 'react';
import {Context as PositionContext} from '../context/PositionContext';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as SicknessContext} from '../context/SicknessContext';

export default () => {
    const{ createPosition1, createPosition2, createPosition3 } = useContext(PositionContext)

    const {state: {currentLocation}, reset} = useContext(LocationContext)

    const {state:{sickness}} = useContext(SicknessContext)

    let call = null
    //Helper funktiot
    const savePositionToHealthies = () => {
         console.log('healthies')
    }

    const savePositionToCovids =  async() => {
        await createPosition1(currentLocation);
        reset()
     }

     const savePositionToRecovereds = () => {
        console.log('recovereds')
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
        default:
            call = savePositionToHealthies
    }


    return[call];

}