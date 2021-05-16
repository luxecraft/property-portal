import React from 'react';
import { NumericMenu } from 'react-instantsearch-dom';
import CustomRangeSlider from './CustomRangeSlider';

function RatePerSqrftFacet() {
  return (
    <div className="sqrft-fact">
      <CustomRangeSlider attribute="rate_per_sqrft" />
    </div>
  );
}

export default RatePerSqrftFacet;
