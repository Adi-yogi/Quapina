import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaruants } from 'store/actions.js';

export const SearchPanel = ({ dispatch }) => {
    const [searchInCity, setCity] = useState('');
    const [filterBy, setFilterBy] = useState('');

    const searchRestaurants = event => {
        event.preventDefault();
        dispatch(fetchRestaruants({ searchInCity, filterBy }));
    }
    return <div className="searchForm">
        <form onSubmit={searchRestaurants}>
            <input required="required" type="text" name="searchInCity" placeholder="City Name"
                onChange={event => setCity(event.target.value)}
            />
            <input type="text" name="filterBy" placeholder="Refine"
                onChange={event => setFilterBy(event.target.value)} />
            <button type="submit">Search</button>
        </form>
    </div>
}

export default connect()(SearchPanel);