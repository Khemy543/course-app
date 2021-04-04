import {combineReducers} from 'redux';
import user from './userReducer';
import notification from './indexReducer';

const rootReducer = combineReducers({
  // short hand property names
  user,
  notification
})

export default rootReducer;