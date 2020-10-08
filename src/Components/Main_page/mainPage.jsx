import React, { useState, useEffect} from 'react';
import axios from 'axios';

const MainPageContent = () => {
    const [books, setBooks] = useState([]);
    const [bookTitle, setBookTitle] = useState('');

    const getBooksFromApi = async () => {
        const booksFromApi = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=10&startIndex=${books.length}`);
        setBooks([...books, ...booksFromApi.data.items]);
        console.log(booksFromApi.data.items);
    };

    useEffect(() => {
            const timeoutId = setTimeout(() => {
                if (bookTitle) {
                    getBooksFromApi();
                };
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
    }, [bookTitle]);

    const renderBooksList = () => {
        return books.length > 0 ? books.map((book,index) => {
            return <div key={index} className="book-container">
                <img className="book-picture" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} alt="No found" />
                <p className="book-title">{book.volumeInfo.title}</p>
                <p className="book-description-container">{book.volumeInfo.description ? `${book.volumeInfo.description.split(' ').slice(0, 15).join(' ')}...` : 'No description found'}</p>
            </div>
        }) : null
    }

    return (
        <div className='mainPage'>
            <h3>Welcome all bookworms! Here you will find book from all around the world! Hope you'll enjoy it :)</h3>
            <div className="input-container">
                <input
                    className="input"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    placeholder="Type what you're looking for"
                >
                </input>
            </div>
            <div className="books-container">
                {renderBooksList()}
            </div>
        </div>
    )
};

export default MainPageContent;