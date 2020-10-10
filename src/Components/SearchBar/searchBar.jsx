import React, { useState, useEffect } from 'react';
import { TiArrowSync } from 'react-icons/ti';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBooksFromApi, resetSearchResults } from '../../redux_actions/bookActions';
import { createFilter } from '../../Utils/filterCreate';
import { generateLanguageChangeArea } from '../../Utils/languageChange'

const SearchBarContent = ({ getBooksFromApi, resetSearchResults, booksData }) => {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [language, setLanguage] = useState('');
    const [openCloseFilters, setOpenCloseFilters]=useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (bookTitle || bookAuthor) {
                getBooksFromApi(bookTitle, booksData, createFilter({author: bookAuthor, language: language }));
                console.log(booksData);
            };
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [bookTitle, bookAuthor, language]);

    useEffect(() => {
        let timer;
        window.onscroll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (document.getElementById('root').getBoundingClientRect().bottom <= window.innerHeight) {
                    getBooksFromApi(bookTitle, booksData, createFilter({author: bookAuthor, language: language }));
                    console.log(booksData)
                }
                else {
                    return
                }
            }, 100);
        }
    }, [booksData]);


    const resetSearch = () => {
        resetSearchResults();
        setBookTitle('');
        setBookAuthor('');
        setLanguage('');
    }
 
    return (
            <div className="input-container">
                <div className="main-searchbar-container">
                <input
                    className="input"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    placeholder="Type what you're looking for"
                >
                </input>
                <div className="button-container" onClick={() => resetSearch()}>
                        <TiArrowSync />
                        <p>Reset</p>
                    </div>
                </div>
                <button className="button" onClick={() => setOpenCloseFilters(!openCloseFilters)}>Open Search Filters</button>
                { openCloseFilters ?
                <div className="additional-searchbar-container">
                    <div className="filter">
                        <p>Author: </p>
                <input
                    className="input"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    placeholder="Type author"
                >
                </input>
                </div>
                <div className="filter">
                <p>Language: </p>
                    { generateLanguageChangeArea(language, setLanguage) }
                    </div>
                </div> : null }
            </div>
    )
};

const mapStateToProps = (state) => ({
    booksData: state.booksData.books,
});

SearchBarContent.propTypes = {
    booksData: PropTypes.array,
}

export default connect(mapStateToProps, { getBooksFromApi, resetSearchResults })(SearchBarContent);