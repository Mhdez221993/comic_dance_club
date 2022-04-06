/* eslint-disable camelcase */
import * as API from './api';

const SET_ALL_ITEMS = 'item/SET_ALL_ITEMS';
const SET_CREATE_ITEM = 'item/SET_CREATE_ITEM';

const initialState = {
  items: [],
  message: [],
};

const setItems = (payload) => ({
  type: SET_ALL_ITEMS,
  payload,
});

const setCreateItem = (payload) => ({
  type: SET_CREATE_ITEM,
  payload,
});

export const loadItems = () => async (dispatch) => {
  const response = await API.fetchItems();
  dispatch(setItems(response));
};

export const createItem = (item) => async (dispatch) => {
  const data = await API.createItem(item);
  dispatch(setCreateItem(data.message));
  return data;
};

export const deleteItem = (id) => async () => {
  await API.deleteItem(id);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ITEMS:
      return { ...state, items: action.payload };

    case SET_CREATE_ITEM:
      return { ...state, message: action.payload };

    default:
      return state;
  }
};

export default reducer;
