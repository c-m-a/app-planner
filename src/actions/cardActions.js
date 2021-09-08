import { CONSTANTS } from '../actions';

export const addList = (listID, title) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: title
  };
};

