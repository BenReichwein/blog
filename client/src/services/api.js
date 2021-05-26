import axios from 'axios';

// This makes it so we can use shortened url with api calls
export default axios.create({
  baseURL: `https://blog-314902.wl.r.appspot.com/api`,
  withCredentials: true
});