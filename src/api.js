import { addNotification } from 'actions/indexActions';
import axios from 'axios';
let token  = localStorage.getItem('AuthToken');


let API =  axios.create({
  baseURL: 'https://online-course-backend.herokuapp.com/api/',
  headers:{
      "Authorization":`Bearer ${token}`
  }
})
/* API.interceptors.response.use((response) => response, (error) => {
  // whatever you want to do with the error
    console.log(error.response.status);
    if(error.response.status == 401){
      addNotification({
        title:"Error",
        text:"Something happend, Please try again later",
        color:'danger'
      })
    }
}); */

export default API;