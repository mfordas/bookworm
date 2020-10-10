import { TYPES } from "../redux_actions/types";

const initialState = {
  books: [],
  bookTitle: "",
  filter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.getBooks:
      return {
        ...state,
        books: [...action.books],
        bookTitle: action.bookTitle,
        filter: action.filter
      };
    case TYPES.getNextBooks:
      return {
        ...state,
        books: [...state.books, ...action.books],
        bookTitle: action.bookTitle,
        filter: action.filter
      };
    case TYPES.resetSearch:
      return {
        ...state,
        books: action.books,
        bookTitle: action.bookTitle,
        filter: action.filter
      };
    default:
      return state;
  }
}
