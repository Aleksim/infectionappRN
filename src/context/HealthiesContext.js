import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const healthiesReducer = (state, action) =>{
    switch (action.type){
        case 'fetch_healthies':
            return action.payload
        default:
            return state;
    }
}

const fetchHealthies = dispatch =>async()=>{
    const response = await trackerApi.get('/healthies')
    dispatch({type: 'fetch_healthies', payload: response.data})
    // console.log(response)
}

const createHealthies = dispatch => async (locations)=> {
    await trackerApi.post('/healthies', {locations})
    console.log(currentLocation)
}

export const {Provider, Context} = createDataContext(

    healthiesReducer,
    {fetchHealthies, createHealthies},
    []
)
