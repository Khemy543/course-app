import API from '../api.js';
import * as types from './actionTypes';
import swal from 'sweetalert';



export function loadUserSuccess(user) {
    return {type: types.LOAD_USER_SUCCESS, user};
  }
export function LogoutSuccess(user){
    return {type: types.LOGOUT_SUCCESS, user}
}


export function getuserData(dispatch) {
      return API.get('auth/user').then(user => {
        dispatch(loadUserSuccess(user.data));
      }).catch(error => {
        throw(error);
      });
  }

export function LogoutUser(dispatch) {
    return swal({
      title: "Logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((out)=>{
      if(out){
      API.post('auth/logout',null).then(response =>{
        localStorage.removeItem('AuthToken');
        dispatch(LogoutSuccess({}));
        window.location.reload("/")
    })
    .catch(error=>{
        throw(error)
    });
  }
})
    
}

 