import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authenticationReducer from './reducers/authenticationReducer';
import usersReducer from './reducers/usersReducer';

const initialState = {};
const middleware = [thunk];
const composeEnhancer = compose;

const reducers = combineReducers({
  authenticatedUser: authenticationReducer,
  usersList: usersReducer,
});

const Store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

export default Store;
