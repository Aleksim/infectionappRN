import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const sicksReducer = (state, action) =>{
    switch (action.type){
        case 'fetch_sicks':
            return action.payload
        default:
            return state;
    }
}

const fetchSicks = dispatch =>async()=>{
    const response = await trackerApi.get('/sicks')
    dispatch({type: 'fetch_sicks', payload: response.data})
    // console.log(response)
}

const createSicks = dispatch => async (currentLocation)=> {
    await trackerApi.post('/sicks', currentLocation)
    console.log(currentLocation)
}

export const {Provider, Context} = createDataContext(

    sicksReducer,
    {fetchSicks, createSicks},
    []
)