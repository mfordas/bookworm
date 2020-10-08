import {
    TYPES
} from '../redux_actions/types';

const initialState = {
    books: [],
    bookTitle: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.getBooks:
            return {
                ...state,
                books: [...action.books],
                bookTitle: action.bookTitle,
            };
        case TYPES.getNextBooks:
            return {
                ...state,
                books: [...state.books, ...action.books],
                bookTitle: action.bookTitle,
            };
            default:
                return state;
    }
}