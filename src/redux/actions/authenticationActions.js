import { LOGIN_USER } from '../types';
import { signUp, login, signOut } from '../../services/ApiConfig';

export const registerUser = (navigation, data) => async (dispatch) => {
  try {
    await signUp(data);
    navigation.navigate('Index');
  } catch (err) {
    console.log({ err });
  }
};

export const loginUser = (navigation, data) => async (dispatch) => {
  try {
    const userInfo = await login(data);
    dispatch({ type: LOGIN_USER, payload: userInfo });
    navigation.navigate('Home');
  } catch (err) {
    console.log({ err });
  }
};

export const signOutUser = (navigation) => async (dispatch) => {
  try {
    await signOut();
    navigation.navigate('Index');
  } catch (err) {
    console.log({ err });
  }
};
