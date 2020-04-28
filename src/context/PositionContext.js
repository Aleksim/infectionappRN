import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'




const positionReducer = (state, action) =>{
    switch (action.type){
        case 'fetch_positions':
            return action.payload
        default:
            return state;
    }
}

const fetchPositions = dispatch =>async()=>{
    const response = await trackerApi.get('/positions')
    dispatch({type: 'fetch_positions', payload: response.data})
    // console.log(response)
}

//eri tauluista hakevat action creatorit
const fetchHealthies = dispatch =>async()=>{
    const response = await trackerApi.get('/healthies')
    dispatch({type: 'fetch_healthies', payload: response.data})
    // console.log(response)
}


const fetchCovids = dispatch =>async()=>{
    const response = await trackerApi.get('/covids')
    dispatch({type: 'fetch_covids', payload: response.data})
    // console.log(response)
}

const fetchRecovereds = dispatch =>async()=>{
    const response = await trackerApi.get('/recovereds')
    dispatch({type: 'fetch_recovereds', payload: response.data})
    // console.log(response)
}

const fetchSicks = dispatch =>async()=>{
    const response = await trackerApi.get('/sicks')
    dispatch({type: 'fetch_sicks', payload: response.data})
    // console.log(response)
}

//tänne pitää luoda ne kaikki eri tauluihin tallentavat action creatorit

const createPosition1 = dispatch => async (currentLocation)=> {
    await trackerApi.post('/positions', currentLocation)
    console.log(currentLocation)
}

const createPosition2 = dispatch => async (currentLocation)=> {
    await trackerApi.post('/healthies', currentLocation)
    console.log(currentLocation)
}


const createPosition3 = dispatch => async (currentLocation)=> {
    await trackerApi.post('/covids', currentLocation)
    console.log(currentLocation)
}

const createPosition4 = dispatch => async (currentLocation)=> {
    await trackerApi.post('/recovereds', currentLocation)
    console.log(currentLocation)
}

const createPosition5 = dispatch => async (currentLocation)=> {
    await trackerApi.post('/sicks', currentLocation)
    console.log(currentLocation)
}


export const {Provider, Context} = createDataContext(

    positionReducer,
    {fetchPositions, fetchHealthies, fetchCovids, fetchRecovereds, fetchSicks, createPosition1, createPosition2, createPosition3, createPosition4, createPosition5},
    []
)