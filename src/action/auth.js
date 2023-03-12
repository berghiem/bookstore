import axios from 'axios';
import axiosConfig from "./axiosconfig";
import {
    REG_PASS,
    REG_FAIL,
    AUTH_PASS,
    AUTH_FAIL,
    LOGIN_PASS,
    LOGIN_FAIL,
    LOGOUT
} from '../action/types';
import setAuthToken from '../helpers/setAuthToken';

export const loadUSer = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axiosConfig.get('/api/auth');
        dispatch({
            type : AUTH_PASS ,
            payload : res.data
        })
    }catch (err) {
        dispatch ({
            type : AUTH_FAIL
        })
    }

};


export const register =({username, email, password}) => 
    async dispatch =>{
    
    const role = "user";
    const body = JSON.stringify({ username, email, password, role});

    try{
        const res = await axiosConfig.post('/api/auth/signup',body,
            {
            headers: {
                'Content-Type': 'application/json',
            }}
            );
        
        dispatch({
            type : REG_PASS,
            payload : res.data
        });
       
        

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => alert(error.msg));
        }dispatch({
             type : REG_FAIL
        }); 
    }
};

export const login = ({username,password}) => async dispatch => {
    const body = JSON.stringify({ username, password});

    try {
        const res = await axiosConfig.post('/api/auth/signin', body,  {
            headers: {
                'Content-Type': 'application/json',
            }}
            );
        dispatch({
            type : LOGIN_PASS,
            payload : res.data
        });
        dispatch(loadUSer);
    }catch (err){
        const errors = err.response.data.errors;
        if(errors){
                errors.forEach(error => alert=(error.msg));
        }
        dispatch({
            type : LOGIN_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type : LOGOUT
    });
};