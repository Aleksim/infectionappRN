import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const recoveredsReducer = (state, action) =>{
    switch (action.type){
        case 'fetch_recovereds':
            return action.payload
        default:
            return state;
    }
}

const fetchRecovereds = dispatch =>async()=>{
    const response = await trackerApi.get('/recovereds')
    dispatch({type: 'fetch_recovereds', payload: response.data})
    // console.log(response)
}

const createRecovereds = dispatch => async (currentLocation)=> {
    await trackerApi.post('/recovereds', currentLocation)
    console.log(currentLocation)
}

export const {Provider, Context} = createDataContext(

    recoveredsReducer,
    {fetchRecovereds, createRecovereds},
    []
)
