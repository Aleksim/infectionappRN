import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const covidsReducer = (state, action) =>{
    switch (action.type){
        case 'fetch_covids':
            return action.payload
        default:
            return state;
    }
}

const fetchCovids = dispatch =>async()=>{
    const response = await trackerApi.get('/covids')
    dispatch({type: 'fetch_covids', payload: response.data})
    // console.log(response)
}

const createCovids = dispatch => async (locations)=> {
    await trackerApi.post('/covids', {locations})
    console.log(locations)
}

export const {Provider, Context} = createDataContext(

    covidsReducer,
    {fetchCovids, createCovids},
    []
)
