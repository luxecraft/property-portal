import React from 'react';
import { RangeInput } from 'react-instantsearch-dom';
import CustomRangeInput from './CustomRangeInput';

function PriceFacet() {
  return <RangeInput attribute="price" />;
}

export default PriceFacet;
