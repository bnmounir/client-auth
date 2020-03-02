import axios from 'axios';
// types
export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
// 'https://server-api-for-testing-auth.appspot.com'
// action creators
export const signup = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4000/signup', formProps);
        dispatch({
            type: AUTH_USER,
            payload: res.data.token
        });
        localStorage.setItem('token', res.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: "email or password couldn't be processed"
        });
    }
};

export const login = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4000/login', formProps);
        dispatch({
            type: AUTH_USER,
            payload: res.data.token
        });
        localStorage.setItem('token', res.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: "email or password couldn't be processed"
        });
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};
