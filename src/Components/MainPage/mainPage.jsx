import React from 'react';

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

export default MainPageContent;