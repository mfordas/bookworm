import {
    TYPES
} from '../redux_actions/types';

const initialState = {
    books: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.getBooks:
            return {
                ...state,
                books: [...state.books, ...action.books],
            };
            default:
                return state;
    }
}