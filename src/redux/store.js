import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import fetchAnswersReducer from "./reducers/fetchAnswersReducer";
import numberOfAnswerReducer from "./reducers/numberOfAnswerReducer";
const reducer = combineReducers({
  fetchAnswersReducer,
  numberOfAnswerReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
