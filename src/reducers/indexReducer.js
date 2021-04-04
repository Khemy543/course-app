import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function indexReducer(state = initialState.notification, action) {
  switch(action.type) {
    case types.ADD_NOTIFICATION:
      return action.notification
    default: 
      return state;
  }
}