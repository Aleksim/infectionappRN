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

const createPosition = dispatch => async (currentLocation)=> {
    await trackerApi.post('/positions', {currentLocation})
    console.log(currentLocation)
}

export const {Provider, Context} = createDataContext(

    positionReducer,
    {fetchPositions, createPosition},
    []
)