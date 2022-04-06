/* eslint-disable camelcase */
import * as API from './api';

const SET_USER_REGISTRATION = 'auth/registration/SET_USER_REGISTRATION';
const SET_USER_SESSION = 'auth/session/SET_USER_SESSION';
const SET_DESTROY_USER_SESSION = 'auth/session/SET_DESTROY_USER_SESSION';

const role = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('role')) : '';
const status = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('status')) : false;

const initialState = {
  message: [],
  status,
  role,
};

const setSingOut = (payload) => ({
  type: SET_DESTROY_USER_SESSION,
  payload,
});

const setSingIn = (payload) => ({
  type: SET_USER_SESSION,
  payload,
});

export const setSingUpApi = (endPoint, payload) => async () => {
  const data = await API.authApi(endPoint, payload);
  return data;
};

export const setSingInApi = (endPoint, payload) => async (dispatch) => {
  const data = await API.authApi(endPoint, payload);
  dispatch(setSingIn(data));
  return data;
};

export const setSingOutApi = () => async (dispatch) => {
  await API.destroySession('sign_out');
  dispatch(setSingOut());
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REGISTRATION:
      return {
        ...state,
        success: true,
      };

    case SET_DESTROY_USER_SESSION:
      return {
        message: [],
        status: '',
        role: '',
      };

    case SET_USER_SESSION:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
