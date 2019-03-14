import React from 'react';
import { connect } from 'react-redux';
import { LIST_STATUS } from 'store/reducer.js';

export const RestaurantList = ({ items = [], filterBy = undefined, searchInCity = '', listStatus }) => {

    const filterItems = () => items.filter(item => {
        const { name, address, area } = item;
        const searchIn = `${name}${address}${area}`.toLowerCase();
        return searchIn.toLowerCase().includes(filterBy.toLowerCase());
    });
    const displayItems = !!filterBy ? filterItems() : items;

    if (listStatus === LIST_STATUS.INITIAL) {
        return <div className="incenter">
            Please enter a city to search. e.g. Orleans,Osseo,Norman etc.
        </div>
    }
    else if (listStatus === LIST_STATUS.FETCHING) {
        return <div className="incenter">
            Please wait
        </div>
    } else if (displayItems.length === 0) {
        return <div className="incenter">
            No Restaurant found for {searchInCity} {!!filterBy && `and ${filterBy}`}
        </div >
    }
    return <React.Fragment>
        <div className="resultHeader">
            <h2>Name</h2>
            <h2>Address</h2>
            <h2>Price</h2>
        </div>
        <div className="results">
            {displayItems.map(item => <div className="resultElement" key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.address}</h3>
                <h3>{item.price}</h3>
            </div>)}
        </div>
    </React.Fragment>
}

const mapStateToProps = ({ restaurant }) => ({
    items: restaurant.items,
    searchInCity: restaurant.searchInCity,
    filterBy: restaurant.filterBy,
    listStatus: restaurant.listStatus
});

export default connect(mapStateToProps)(RestaurantList)