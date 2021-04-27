import { combineReducers } from 'redux';
import messageReducer from './message-reducer'

// In redux this is where we combine the states

export default combineReducers({
    message: messageReducer,
})