import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBooksFromApi } from '../../redux_actions/bookActions';

const MainPageContent = ({ getBooksFromApi, booksData }) => {
    const [bookTitle, setBookTitle] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (bookTitle) {
                getBooksFromApi(bookTitle, booksData, '');
            };
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [bookTitle]);

    useEffect(() => {
        let timer;
        window.onscroll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (document.getElementById('root').getBoundingClientRect().bottom <= window.innerHeight) {
                    getBooksFromApi(bookTitle, booksData, '')
                }
                else {
                    return
                }
            }, 100);
        }
    }, [booksData]);

    const renderBooksList = () => {
        return booksData.length > 0 ? booksData.map((book, index) => {
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

const mapStateToProps = (state) => ({
    booksData: state.booksData.books,
});

MainPageContent.propTypes = {
    booksData: PropTypes.array,
}

export default connect(mapStateToProps, { getBooksFromApi })(MainPageContent);