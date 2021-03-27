import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
const authenticated = localStorage.getItem('AuthToken')

export const ProtectedRoute =({component: Component, ...rest}) =>{
    return(
        <Route {...rest} render={
            (props)=>{
                if(authenticated){
                    return <Component {...props}/>
                }else{
                    return <Redirect to={
                        {
                            pathname:`/auth/login`,
                            state:{
                                from:props.location.pathname
                            }
                        }
                    } />
                }
            }
        } />
    )
}

export const AuthRedirection = ({component: Component, ...rest}) =>{
    return(
        <Route {...rest} render={
            (props)=>{
                if(authenticated){
                    return <Redirect to={
                        {
                            pathname:'/user/index'
                        }
                    } />
                }else{
                    return <Component {...props} />
                }
            }
        }/>
    )
}