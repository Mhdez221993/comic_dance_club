/* eslint-disable camelcase */
import authApi from './api';

const SET_USER_REGISTRATION = 'auth/registration/SET_USER_REGISTRATION';
const SET_USER_SESSION = 'auth/session/SET_USER_SESSION';
const SET_DESTROY_USER_SESSION = 'auth/session/SET_DESTROY_USER_SESSION';
const initialState = {
  message: [],
  status: '',
  role: '',
};

export const setSingUpApi = (endPoint, payload) => async () => {
  const data = await authApi(endPoint, payload);
  return data;
};

const setSingOut = (payload) => ({
  type: SET_DESTROY_USER_SESSION,
  payload,
});

export const setSingOutApi = (endPoint) => async (dispatch) => {
  authApi(endPoint);
  dispatch(setSingOut());
};

const setSingIn = (payload) => ({
  type: SET_USER_SESSION,
  payload,
});

export const setSingInApi = (endPoint, payload) => async (dispatch) => {
  const data = await authApi(endPoint, payload);
  dispatch(setSingIn(data));
  return data;
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
      };

    case SET_USER_SESSION:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
