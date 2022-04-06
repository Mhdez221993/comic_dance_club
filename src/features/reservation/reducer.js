/* eslint-disable camelcase */
import * as API from './api';

const SET_LOADITEMS = 'reservation/loadItems/SET_LOADITEMS';
const SET_CREATE_RESERVATION = 'reservation/new/SET_CREATE_RESERVATION';

const initialState = {
  reservations: [],
  confirmation: '',
};

const setcreateReservation = (payload) => ({
  type: SET_CREATE_RESERVATION,
  payload,
});

const setLoadReservations = (payload) => ({
  type: SET_LOADITEMS,
  payload,
});

export const loadReservations = () => async (dispatch) => {
  const data = await API.loadReservations();
  if (data) {
    dispatch(setLoadReservations(data));
  }
};

export const createReservation = (payload) => async (dispatch) => {
  const data = await API.createReservation(payload);
  dispatch(setcreateReservation(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADITEMS:
      return { ...state, reservations: action.payload };

    case SET_CREATE_RESERVATION:
      return { ...state, confirmation: action.payload };

    default:
      return state;
  }
};

export default reducer;
