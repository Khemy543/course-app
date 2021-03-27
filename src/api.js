import axios from 'axios';
import ToastNotification from './components/Toast.js';
let token  = localStorage.getItem('AuthToken')


let API =  axios.create({
  baseURL: 'https://online-course-backend.herokuapp.com/api/',
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