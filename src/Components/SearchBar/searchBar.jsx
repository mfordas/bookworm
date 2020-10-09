import React, { useState, useEffect } from 'react';
import iso from 'iso-639-1';
import { TiArrowSync } from 'react-icons/ti';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBooksFromApi, resetSearchResults } from '../../redux_actions/bookActions';
import { createFilter } from '../../Utils/filter_create';

const SearchBarContent = ({ getBooksFromApi, resetSearchResults, booksData }) => {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [language, setLanguage] = useState('');
    const [openCloseFilters, setOpenCloseFilters]=useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (bookTitle || bookAuthor) {
                getBooksFromApi(bookTitle, booksData, createFilter(bookAuthor, language));
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
                    getBooksFromApi(bookTitle, booksData, createFilter(bookAuthor, language));
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
        setLanguage('pl');
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
                <button className="button" onClick={() => setOpenCloseFilters(!openCloseFilters)}>Search Filters</button>
                <div className="button-container" onClick={() => resetSearch()}>
                        <TiArrowSync />
                        <p>Reset</p>
                    </div>
                </div>
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
                    <select className="button" onChange={e => setLanguage(e.target.value)} value={language}>
                    {iso.getAllNames().map((codeName, index) => <option key={index} value={iso.getCode(codeName)}>{codeName}</option>)}
                    </select>
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