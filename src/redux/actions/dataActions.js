import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';
import axios from 'axios';

export const loginUser = (userData) => (dispatch) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}${appRoutes.LOGIN.url}`, newUser);
    const { idToken } = response.data.data;
    console.log(response, response.data, idToken);
    localStorage.setItem('FirebaseIdToken', `Bearer ${idToken}`); 
    axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
    // redirect
    // dispatch getUserData
}

export const getUserData = () => (dispatch) => {

}