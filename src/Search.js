import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"

function Search() {
    return (
        <div className="search">
            <div className="search-input">
                <Link to="/search">
                <SearchIcon className="search_icon"/>
                </Link>
                <input placeholder="Location/Sport"/>
            </div>
        </div>
    )
}

export default Search
