import history from '../services/history'
import api from '../services/api'
import {
    WELCOME_MESSAGE,
} from './types';
//
//-> Messages
//
// gets welcome message from api to check if api is running
export const welcomeMessage = () => async (dispatch) => {
  const response = await api.get('home')

  dispatch({ type: WELCOME_MESSAGE, payload: response.data});
};
//
//-> Authentications
//
// making an account
export const register = (formValues) => () => {
  api.post('/user/register', {
    username: formValues.username.toLowerCase(),
    password: formValues.password
  })
  .then(res => {
    alert('Registered! Go login')
    history.push('/login')
  })
  .catch(err => {
    alert(err.response.data)
  })
};
// logging into existing account
export const login = (formValues) => () => {
  api.post('/user/login', {
    username: formValues.username.toLowerCase(),
    password: formValues.password
  })
  .then(res => {
    console.log('ok')
    history.push('/')
  })
  .catch(err => {
    alert(err.response.data)
  })
};