import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];
const composeEnhancer = compose;

const reducers = combineReducers({
  word: () => "HELLO WORLD"
});

const Store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default Store;