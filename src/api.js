import axios from 'axios';
let token  = localStorage.getItem('AuthToken')


export default axios.create({
  baseURL: process.env.REACT_APP_TEST_API_URL,
  headers:{
      "Authorization":`Bearer ${token}`
  }
});