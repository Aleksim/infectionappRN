import createDataContext from './createDataContext';



const sicknessReducer = (state, action) => {
    switch(action.type){
        case 'add_sickness':
            return{...state, sickness: action.payload};
            case 'reset':
                return{...state, sickness: ''}
        default:
            return state;
    }
}
const addSickness = dispatch => (sickness) => {
    dispatch({type: 'add_sickness', payload: sickness})
}


const reset = dispatch => () => {
    dispatch({type: 'reset'})
}


export const {Context, Provider} = createDataContext(

    sicknessReducer,
    {addSickness, reset},

    { sickness: ''}
)