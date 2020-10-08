import axios from 'axios';
import { store } from '../redux_store/reduxStore';

import {
    TYPES
} from './types';

export const getBooksFromApi = (bookTitle, currentBooksList, filter) => async (dispatch) => {
    try {
        let booksFromApi;

        if (store.getState().booksData.bookTitle === bookTitle) { 
            booksFromApi = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${store.getState().booksData.bookTitle}${filter}&maxResults=10&startIndex=${currentBooksList.length}`);
            
            if (booksFromApi.status === 200) {
                dispatch({
                    type: TYPES.getNextBooks,
                    books: booksFromApi.data.items,
                    bookTitle: bookTitle,
                });
            }
        } else {
            booksFromApi = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}${filter}&maxResults=10&startIndex=0`);
            
            if (booksFromApi.status === 200) {
                dispatch({
                    type: TYPES.getBooks,
                    books: booksFromApi.data.items,
                    bookTitle: bookTitle,
                });
            }
        }

        console.log('works');

    } catch (error) {
        console.log(error)
    }

};