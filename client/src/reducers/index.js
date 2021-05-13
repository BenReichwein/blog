import { combineReducers } from 'redux';
import messageReducer from './message_reducer'
import blogReducer from './blog_reducer'
import postReducer from './post_reducer'

// In redux this is where we combine the states

export default combineReducers({
    message: messageReducer,
    blog: blogReducer,
    post: postReducer,
})