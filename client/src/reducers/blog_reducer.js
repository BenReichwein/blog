/* eslint-disable import/no-anonymous-default-export */
import {
    ALL_BLOGS
} from '../actions/types'
export default (state = {}, action) => {
    switch (action.type) {
        case ALL_BLOGS:
            return action.payload;
        default:
            return state;
    }
}