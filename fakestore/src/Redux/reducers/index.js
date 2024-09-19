import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducers';

export const reducers = combineReducers({
  AllProducts: productReducer,
  singleProducts: selectedProductReducer,
});
