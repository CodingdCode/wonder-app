import { LOGIN_USER } from '../types';
import { signUpUser, login } from '../../services/ApiConfig';

export const registerUser = (navigation, data) => async (dispatch) => {
  try {
    await signUpUser(data);
    navigation.navigate('Index');
  } catch (err) {
    console.log({ err });
  }
};

export const loginUser = (navigation, data) => async (dispatch) => {
  try {
    const userInfo = await login(data);
    dispatch({ type: LOGIN_USER, payload: userInfo });
    navigation.navigate('App');
  } catch (err) {
    console.log({ err });
  }
};
