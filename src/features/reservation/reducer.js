/* eslint-disable camelcase */
import * as API from './api';

const SET_LOADITEMS = 'reservation/loadItems/SET_LOADITEMS';

const initialState = {
  reservations: [],
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADITEMS:
      return { ...state, reservations: action.payload };

    default:
      return state;
  }
};

export default reducer;
