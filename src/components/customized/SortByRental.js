import React from 'react';
import { SortBy } from 'react-instantsearch-dom';

function SortByRental() {
  return (
    <SortBy
      defaultRefinement="rent"
      items={[
        { value: 'rent', label: 'Default' },
        { value: 'rent/sort/price:asc', label: 'Price asc.' },
        { value: 'rent/sort/price:desc', label: 'Price desc.' },
        { value: 'rent/sort/sqrft:asc', label: 'Square Feet asc. ' },
        { value: 'rent/sort/sqrft:desc', label: 'Sqaure Feet desc. ' },
      ]}
    />
  );
}

export default SortByRental;
