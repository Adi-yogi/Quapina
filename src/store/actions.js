import { ACTION_TYPES, LIST_STATUS } from './reducer.js';

export function setListStatus(status) {
    return {
        type: ACTION_TYPES.SET_LIST_STATUS,
        data: {
            listStatus: status
        }
    }
}
export function setListItems(items) {
    return {
        type: ACTION_TYPES.SET_LIST_ITEMS,
        data: {
            items
        }
    }
}
export function setSearchCriteria({ searchInCity, filterBy }) {
    return {
        type: ACTION_TYPES.SET_CRITERIA,
        data: {
            searchInCity,
            filterBy
        }
    }
}
export function fetchRestaruants({ searchInCity, filterBy }) {
    return async (dispatch, getState) => {
        const { restaurant } = getState();
        if (searchInCity !== restaurant.searchInCity) {
            dispatch(setListStatus(LIST_STATUS.FETCHING));
            const response = await fetch(`http://opentable.herokuapp.com/api/restaurants?city=${searchInCity}`);
            const { restaurants: items } = await response.json();
            dispatch(setListItems(items.map(({ id, name, address, area, price }) => ({ id, name, address, area, price }))));
        }
        dispatch(setSearchCriteria({ searchInCity, filterBy }));
    }
}