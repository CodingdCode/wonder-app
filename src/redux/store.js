import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authenticationReducers from './reducers/authenticationReducers';

const initialState = {};
const middleware = [thunk];
const composeEnhancer = compose;

const reducers = combineReducers({
  authenticatedUser: authenticationReducers,
});

const Store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

export default Store;
