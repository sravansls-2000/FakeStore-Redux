import React from 'react';
import { ActionTypes } from '../constants/actionTypes';
const initialState = [{ id: 1, name: 'sravan' }];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
