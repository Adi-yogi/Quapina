import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantList } from './RestaurantList.js';
import { LIST_STATUS } from 'store/reducer.js';


it('renders without crashing', () => {
    const props = {
        listStatus: LIST_STATUS.INITIAL
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});

it('renders properly when no items', () => {
    const props = {
        listStatus: LIST_STATUS.FETCH_DONE,
        items: [],
        searchInCity: 'Boston'
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});

it('renders properly when filter results no items', () => {
    const props = {
        listStatus: LIST_STATUS.FETCH_DONE,
        items: [],
        searchInCity: 'Boston',
        filterBy: 'kitchen'
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});
it('renders properly when loading', () => {
    const props = {
        listStatus: LIST_STATUS.FETCHING
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});

it('renders properly with data', () => {
    const props = {
        listStatus: LIST_STATUS.FETCH_DONE,
        items: [
            {
                id: 1635,
                name: 'Elephant Walk, The - Boston',
                address: '900 Beacon Street',
                area: 'Boston / New England',
                price: 2
            },
            {
                id: 2829,
                name: 'Metropolis Cafe',
                address: '584 Tremont Street',
                area: 'Boston / New England',
                price: 2
            }
        ]
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});

it('renders properly when filtering', () => {
    const props = {
        listStatus: LIST_STATUS.FETCH_DONE,
        items: [
            {
                id: 1635,
                name: 'Elephant Walk, The - Boston',
                address: '900 Beacon Street',
                area: 'Boston / New England',
                price: 2
            },
            {
                id: 2829,
                name: 'Metropolis Cafe',
                address: '584 Tremont Street',
                area: 'Boston / New England',
                price: 2
            },
            {
                id: 2642,
                name: 'Troquet',
                address: '140 Boylston Street',
                area: 'Boston / New England',
                price: 3
            },
            {
                id: 5907,
                name: 'Terramia',
                address: '98 Salem St., North End',
                area: 'Boston / New England',
                price: 3
            },
            {
                id: 2827,
                name: 'Rowes Wharf Sea Grille',
                address: '70 Rowes Wharf',
                area: 'Boston / New England',
                price: 2
            }
        ],
        filterBy: 'Rowes'
    }
    const restaurantList = shallow(<RestaurantList {...props} />);
    expect(restaurantList).toMatchSnapshot();
});
