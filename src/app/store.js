import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from '../features/auth/reducer';
import itemsReducer from '../features/items/reducer';
import reservationsReducer from '../features/reservation/reducer';

const reducer = combineReducers({
  authReducer,
  itemsReducer,
  reservationsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
