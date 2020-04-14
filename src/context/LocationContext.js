import createDataContext from './createDataContext';



const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_current_location':
            return{...state, currentLocation: action.payload};
            case 'reset':
                return{...state, currentLocation: null}
        default:
            return state;
    }
}
const addLocation = dispatch => (location) => {
    dispatch({type: 'add_current_location', payload: location})
}


const reset = dispatch => () => {
    dispatch({type: 'reset'})
}


export const {Context, Provider} = createDataContext(

    locationReducer,
    {addLocation, reset},

    { currentLocation: null}
)










// import createDataContext from './createDataContext';
// import { Alert } from 'react-native';



// const locationReducer = (state, action) => {
//     switch(action.type){
//         case 'add_current_location':
//             return{...state, currentLocation: action.payload};
//         case 'start_recording':
//             return {...state, recording: true};
//         case 'stop_recording':
//             return {...state, recording: false};
//         case 'add_location':
//             //eli siis tossa locationssissa: we want to build a new array, take all the locations we already have and throw them into this new array. And add in the new
//             //action.payload as well. Remember, we never want to mutate our original state object.
//             return {...state, locations: [...state.locations, action.payload]};
//         case 'reset':
//             return{...state, locations:[]}
//         default:
//             return state;
//     }
// }
// //remember this is going to be one function that gets called with dispatch, that returns another function
// const startRecording = dispatch => () => {
//     dispatch({
//         type: 'start_recording'
//     })
// }

// const stopRecording = dispatch => () =>{
//     dispatch({
//         type: 'stop_recording'
//     })

// }

// //tää on se action creator, jota kutsutaan komponentissa tietyssä kohtaa. Se ottaa location objektin.
// const addLocation = dispatch => (location, recording) => {
//     dispatch({type: 'add_current_location', payload: location})
//     if(recording){
//         dispatch({type: 'add_location', payload: location})
//     }

// }

// const reset = dispatch => () => {
//     dispatch({type: 'reset'})
// }


// export const {Context, Provider} = createDataContext(
//     locationReducer,
//     //actions object
//     {startRecording, stopRecording, addLocation, reset},
//     //default state object
//     {recording: false, locations:[], currentLocation: null}
// )