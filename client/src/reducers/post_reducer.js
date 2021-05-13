/* eslint-disable import/no-anonymous-default-export */
import {
    POST
} from '../actions/types'
export default (state = null, action) => {
    switch (action.type) {
        case POST:
            return action.payload;
        default:
            return state;
    }
}