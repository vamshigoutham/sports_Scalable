import React from 'react';
import {Navigate} from 'react-router-dom';

export const Protected = ({children}) => {
    let token = localStorage.getItem('token');
    if(token) {
        return children
    }
    else {
        return <Navigate to='/login' />
    }
}