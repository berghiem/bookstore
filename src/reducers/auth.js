import {
    REG_PASS,
    REG_FAIL,
    AUTH_PASS,
    GET_BOOK_PASS,
    LOGIN_PASS,
    AUTH_FAIL,
    LOGIN_FAIL,
    LOGOUT
} from '../action/types';

import { Navigate, useNavigate } from 'react-router-dom';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    books : null,
    roles : 'a'
}

export default function auth(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case AUTH_PASS:
            
            return {
                ...state,
                isAuthenticated: true,
                loading: false, 
               
            }
        case LOGIN_PASS:
            console.log(`action ${action.payload.roles}`);
            localStorage.setItem('roles', payload.roles);
            
        case REG_PASS:
            localStorage.setItem('token', payload.accessToken);
            console.log("token reg pass");
        
            console.log(localStorage.getItem('token'));
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                user: payload,
                [action.payload.key] : action.payload.value,
            };

        case GET_BOOK_PASS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                book : payload
            };

        case AUTH_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
              localStorage.removeItem('token');
              return {
                  ...state,
                  token: null,
                  isAuthenticated: false,
                  loading: false
              };
              <Navigate replace to="/welcome" />;
        case REG_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
};