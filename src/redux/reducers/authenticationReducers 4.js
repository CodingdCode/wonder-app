import { LOGIN_USER, SIGNOUT_USER } from '../types';
export default (state = {}, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case LOGIN_USER:
      return { userData: action.payload, isUserAuthenticated: true };
    case SIGNOUT_USER:
      return { userData: {}, isUserAuthenticated: false };

    default:
      return state;
  }
};
