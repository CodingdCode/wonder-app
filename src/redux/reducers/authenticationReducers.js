import { LOGIN_USER } from '../types';
export default (state = {}, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case LOGIN_USER:
      return { userData: action.payload, isUserAuthenticated: true };

    default:
      return state;
  }
};
