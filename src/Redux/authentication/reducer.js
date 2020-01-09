/*
  Auth related reducer
*/
import * as Types from './types';
import { checkAuthentication } from './operations';

// TODO: update isAuthenticated
const initialState = {
  isAuthenticated: checkAuthentication(),
  loading: false,
  success: '',
  error: ''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.BEGIN:
      return { ...state, loading: true, success: '', error: '' };
    case Types.SUCCESS:
      return { ...state, success: action.payload, loading: false, error: '' };
    case Types.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: ''
      };
    case Types.CLEAN:
      return {
        ...state,
        error: '',
        success: '',
        loading: false
      };
    case Types.USEROUT:
      return { ...state, isAuthenticated: false };
    case Types.USERIN:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

export default AuthReducer;
