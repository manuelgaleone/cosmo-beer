import { SET_USER_TOKEN, SET_USER_AUTH, CLEAR_USER_DATA, SET_USER_ID, SET_USERNAME, SET_USER_ADMIN, SET_LANGUAGE, SET_USER_ROLE, SET_COMPANY_CATEGORIES } from '../constants/userConstants';

const initialState = {
  token: null,
  isAuth: false,
  userId: null,
  username: null,
  userRole: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USER_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_USER_ROLE:
      return { ...state, userRole: action.payload };
    case CLEAR_USER_DATA:
        return {
            ...initialState
        };
    default:
      return state;
  }
};
