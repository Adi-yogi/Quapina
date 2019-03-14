import React from 'react';
import { shallow } from 'enzyme';
import { SearchPanel } from './SearchPanel.js';


it('renders without crashing', () => {
    const searchPanel = shallow(<SearchPanel />);
    expect(searchPanel).toMatchSnapshot();
});

it('searchRestaurants on click', () => {
    const dispatch = jest.fn();
    const preventDefault = jest.fn();

    const searchPanel = shallow(<SearchPanel dispatch={dispatch} />);
    searchPanel.find('form').simulate('submit', { preventDefault })
    expect(dispatch.mock.calls.length).toBe(1)
});
