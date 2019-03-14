import React from 'react'
import SearchPanel from './SearchPanel.js';
import RestaurantList from './RestaurantList.js';

export default () => <div className="body-cont">
  <aside />
  <main>
    <SearchPanel />
    <RestaurantList />
  </main>
</div>