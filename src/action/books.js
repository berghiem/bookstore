 
import axiosConfig from "./axiosconfig";
import setAuthToken from '../helpers/setAuthToken';
import {
    REG_PASS,
    REG_FAIL,
    AUTH_PASS,
    AUTH_FAIL,
    GET_BOOK_PASS,
    LOGIN_PASS,
    LOGIN_FAIL,
    LOGOUT
} from "../action/types";

export const getBooks = () => async dispatch => {
   
       
        try {
            const res = await axiosConfig.get('/api/books');
            console.log("getbooks");
            dispatch({
                type: GET_BOOK_PASS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            })
        }
    


};


 