import React from 'react';
import { SortBy } from 'react-instantsearch-dom';

function SortBySale() {
  return (
    <SortBy
      defaultRefinement="sale"
      items={[
        { value: 'sale', label: 'Default' },
        { value: 'sale/sort/price:asc', label: 'Price asc.' },
        { value: 'sale/sort/price:desc', label: 'Price desc.' },
        { value: 'sale/sort/sqrft:asc', label: 'Square Feet asc. ' },
        { value: 'sale/sort/sqrft:desc', label: 'Sqaure Feet desc. ' },
      ]}
    />
  );
}

export default SortBySale;
