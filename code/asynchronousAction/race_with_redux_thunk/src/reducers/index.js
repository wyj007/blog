import * as actionTypes from '../actionTypes'

export default (state = {}, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_DATA:
            return { ...state, 'data': action.payload }
        default:
            return { ...state }
    }
}