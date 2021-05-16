import React from 'react';
import SearchComponent from '../SearchComponent';
import { InstantSearch } from 'react-instantsearch-dom';
import searchClient from '../TypesenseConfig';

function SaleComponent() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="sale" searchClient={searchClient}>
        <SearchComponent name={'sale'} />
      </InstantSearch>
    </div>
  );
}

export default SaleComponent;
