import React from 'react'
import './SearchResult.css'

function SearchResult({
        src,
        location,
        description,
        price
    }) {
        return (
            <div className="result">
                <img src={src} alt="court"/>
                <div className="result-info">
                    <h6>{location}</h6>
                    <h7>{description}</h7>
                </div>
                <div className="result-bottom">
                    <h8>{price}</h8>
                    <button className="btn-book">Book!</button>
                </div>
            </div>
        )
    }

export default SearchResult
