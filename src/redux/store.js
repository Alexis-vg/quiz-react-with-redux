import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import fetchAnswersReducer from "./reducers/fetchAnswersReducer";
const reducer = combineReducers({
  fetchAnswersReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
