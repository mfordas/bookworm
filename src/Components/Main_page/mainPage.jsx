import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBooksFromApi } from '../../redux_actions/bookActions';
import SearchBar from '../SearchBar';
import BooksList from '../BooksList';

const MainPageContent = () => {
    return (
        <div className='mainPage'>
            <h3>Welcome all bookworms! Here you will find books from all around the world! Hope you'll enjoy it :)</h3>
            <SearchBar />
            <BooksList />
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