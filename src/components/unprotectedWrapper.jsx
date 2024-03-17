import React from 'react';
import {Navigate} from 'react-router-dom';

export const Unprotected = ({children}) => {
    let token = localStorage.getItem('token');
    console.log('token', token);
    if(token) {
        return <Navigate to='/' />
    }
    else {
        return children
    }
}