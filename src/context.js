import React from 'react';
import API from './api.js';
import swal from 'sweetalert';

const MyContext = React.createContext();

class MyContexProvider extends React.Component{
    state={
        user:{},
        isAuthenticated:null,
        showToast:false,
		actions: {
			toggleToast: index => this.setState({ showToast: index })
		}
    }

    componentDidMount(){
        this.getUserDetails();
    }

    getUserDetails=()=>{
        API.get('auth/user')
        .then(response=>{
            this.setState({
                user:response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    logout=()=>{
        API.post(  `auth/logout`,null)
        .then(res=>{
            localStorage.removeItem('AuthToken');
            swal({
                title: "Success",
                text:"Logout successful",
                icon: "success",
                buttons:false,
                timer:3000
            }).then((_)=>{
                window.location.reload('/');
            })
            
        })
        .catch(error=>{
        })
    }

    render(){
        return(
            <MyContext.Provider value={{
                ...this.state,
                logout : this.logout
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const MyContextConsumer = MyContext.Consumer;

export {MyContexProvider, MyContextConsumer};