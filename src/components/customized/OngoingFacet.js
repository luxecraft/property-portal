import { RefinementList } from 'react-instantsearch-dom';
import React from 'react';

function OngoingFacet() {
  return (
    <RefinementList
      attribute="construction_status"
      transformItems={items =>
        items.map(item => {
          let label = item.label;
          if (label === 'true') {
            label = 'Ongoing';
          } else {
            label = 'Completed';
          }
          let temp = {
            ...item,
            label: label,
          };
          return temp;
        })
      }
    />
  );
}

export default OngoingFacet;
