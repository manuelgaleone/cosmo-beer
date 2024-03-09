import { SET_USER_TOKEN, SET_USER_AUTH, SET_USERNAME, CLEAR_USER_DATA, SET_USER_ID, SET_USER_ADMIN, SET_LANGUAGE, SET_USER_ROLE, SET_COMPANY_CATEGORIES } from '../constants/userConstants';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token
});

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId
});

export const setUserRole = (userRole) => ({
  type: SET_USER_ROLE,
  payload: userRole
});

export const setIsAuth = (isAuth) => ({
  type: SET_USER_AUTH,
  payload: isAuth
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
});

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});