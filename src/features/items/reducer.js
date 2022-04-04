/* eslint-disable camelcase */
import { fetchItems } from './api';

const SET_ITEMS = 'item/SET_ITEMS';

const initialState = {
  items: [],
};

const setItems = (payload) => ({
  type: SET_ITEMS,
  payload,
});

export const loadItems = () => async (dispatch) => {
  const data = await fetchItems();
  dispatch(setItems(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default reducer;
