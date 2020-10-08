import axios from 'axios';

import {
    TYPES
} from './types';

export const getBooksFromApi = (bookTitle, currentBooksList) => async (dispatch) => {
    try {
        const booksFromApi = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=10&startIndex=${currentBooksList.length}`);

        console.log(booksFromApi.data.items);

        if (booksFromApi.status === 200) {
            dispatch({
                type: TYPES.getBooks,
                books: booksFromApi.data.items
            });
        }

    } catch (error) {
        console.log(error)
    }

};