import { SET_USER_AUTH, CLEAR_USER_DATA, SET_USER_ID } from '../constants/userConstants';

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId
});

export const setIsAuth = (isAuth) => ({
  type: SET_USER_AUTH,
  payload: isAuth
});

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});