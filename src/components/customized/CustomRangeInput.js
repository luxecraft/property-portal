import React from 'react';
import { connectRange } from 'react-instantsearch-core';
import priceFormatter from '../PriceFormatter';

const rangeInputParser = (event, min, max) => {
  const re = new RegExp('^([0-9])+(.*[0-9])?[LC]?$');
  if (re.test(value)) {
    return min;
  }
  if (event.currentTarget.value == '') {
    return min;
  }
  let value = event.currentTarget.value;
  for (let i = 0; i < value.length; ++i) {
    if (['C', 'c', 'l', 'L'].includes(value[i])) {
      let j = ['C', 'c', 'l', 'L'].indexOf(value[i]);
      if (j == 0 || j == 1) {
        value = parseFloat(value.slice(0, j));
        value *= 10000000;
      } else {
        value = parseFloat(value.slice(0, j));
        value *= 100000;
      }
    }
  }
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  if (isNaN(value)) {
    return min;
  }
  if (value <= min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
};

const RangeInput = ({ currentRefinement, refine, min, max }) => (
  <form>
    <input
      className="range-box"
      type="number"
      placeholder="Min"
      onChange={(event) =>
        refine({
          ...currentRefinement,
          min:
            event.currentTarget.value <= min ? min : event.currentTarget.value,
        })
      }
    />
    <br />
    <div className="to-text">to</div>
    <input
      className="range-box"
      type="number"
      placeholder="Max"
      onChange={(event) =>
        refine({
          ...currentRefinement,
          max:
            event.currentTarget.value >= max ? max : event.currentTarget.value,
        })
      }
    />
  </form>
);
const CustomRangeInput = connectRange(RangeInput);
export default CustomRangeInput;
