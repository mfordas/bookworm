import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const BooksListContent = ({ booksData }) => {
    const renderBooksList = () => {
        return booksData.length > 0 ? booksData.map((book, index) => {
            return <div key={index} className="book-container">
                <img className="book-picture" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} alt="No found" />
                <p className="book-title">{book.volumeInfo.title}</p>
                <p className="book-description-container">{book.volumeInfo.description ? `${book.volumeInfo.description.split(' ').slice(0, 15).join(' ')}...` : 'No description found'}</p>
            </div>
        }) : <p>Start typing to search for books</p>
    }

    return (
            <div className="books-container">
                {renderBooksList()}
            </div>
    )
};

const mapStateToProps = (state) => ({
    booksData: state.booksData.books,
});

BooksListContent.propTypes = {
    booksData: PropTypes.array,
}

export default connect(mapStateToProps, {})(BooksListContent);