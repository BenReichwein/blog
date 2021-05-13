import history from '../services/history'
import api from '../services/api'
import axios from 'axios'
import {
    WELCOME_MESSAGE,
    ALL_BLOGS
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
//
// -> Blog
//
// Create blog
export const createBlog = (title, topics, description, blog, image) => {
  console.log('done')
  const formData = new FormData();
  formData.append(
    "file",
    image,
  );
  formData.append(
    'title',
    title
  )
  formData.append(
    'topics',
    topics
  )
  formData.append(
    'description',
    description
  )
  formData.append(
    'blog',
    blog
  )

  axios({
    method: 'POST',
    url: 'http://localhost:8080/api/blog',
    data: formData,
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
    withCredentials: true,
    mode: 'cors'
  })
    .then(res => {
      history.push("/")
      alert(res.data)
    })
    .catch(err => {
      if (err.response.status === 401) {
        history.push("/login")
        return
      } else {
        console.error(err);
        throw err;
      }
    })
};
// get all blogs
export const allBlogs = () => async (dispatch) => {
  const response = await api.get('/blog/all')
  console.log(response)

  dispatch({ type: ALL_BLOGS, payload: response.data});
};