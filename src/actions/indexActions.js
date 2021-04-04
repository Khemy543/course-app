import * as types from './actionTypes';

export function addNotification(notification) {
  console.log('here',notification)
    return {type: types.ADD_NOTIFICATION, notification};
  }