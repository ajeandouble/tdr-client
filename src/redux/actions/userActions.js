import store from '../store';
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';
import axios from 'axios';
import appRoutes from '../../helper/appRoutes';
import { apiCall } from '../../helper/apiHelper';
import { toast } from 'react-toastify';

export const loginUser = (userData, history) => async (dispatch) => {
    console.log(loginUser.name)
    const response = await apiCall({
        url: `${process.env.REACT_APP_API_URL}${appRoutes.LOGIN.url}`,
        method: 'POST',
        payload: userData,
    });

    const { idToken } = response.data.data;
    const { success } = response.data;
    if (!success || !idToken) return { type: 'SET_UNAUTHENTICATED' };

    console.log(response, response.data, idToken);
    localStorage.setItem('FirebaseIdToken', `Bearer ${idToken}`); 
    axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
    dispatch({ type: 'SET_AUTHENTICATED' });
    history.push('/tdr')
    return ;
};

export const signupUser = (userData, history) => async (dispatch) => {
    console.log('signup???')
    const response = await apiCall({
        url: `${process.env.REACT_APP_API_URL}${appRoutes.SIGNUP.url}`,
        method: 'POST',
        payload: userData,
    });

    const { idToken } = response.data.data;
    const { success } = response.data;
    if (!success || !idToken) return { type: 'SET_UNAUTHENTICATED' };

    console.log(response, response.data, idToken);
    localStorage.setItem('FirebaseIdToken', `Bearer ${idToken}`); 
    axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
    dispatch({ type: 'SET_AUTHENTICATED' });
    history.push('/tdr')
    return ;
};

export const getUserProfile = () => async (dispatch) => {
    console.log('getUserProfile');
    const response = await apiCall({
        url: `${process.env.REACT_APP_API_URL}${appRoutes.GET_USER_PROFILE.url}`,
        method: 'GET'
    });
    console.log(response)
    toast('test')
};