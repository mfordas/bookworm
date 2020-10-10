import { combineReducers } from "redux";
import getBooksReducer from "./booksReducer";

export default combineReducers({
  booksData: getBooksReducer
});
