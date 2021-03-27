import axios from 'axios';
import ToastNotification from './components/Toast.js';
let token  = localStorage.getItem('AuthToken')


let API =  axios.create({
  baseURL: process.env.REACT_APP_TEST_API_URL,
  headers:{
      "Authorization":`Bearer ${token}`
  }
});

API.interceptors.response.use((response) => response, (error) => {
  <ToastNotification />
  /* setTimeout(function(){
    <ToastNotification />
  },2000) */
});

export default API;