import React from "react";
import { RefinementList } from "react-instantsearch-dom";

function FacetListAmenities() {
  return (
    <RefinementList
      attribute="amenities_facet"
      transformItems={(items) =>
        items.map((item) => {
          let label = item.label;
          label = label[0].toUpperCase() + label.slice(1, label.length);
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

export default FacetListAmenities; 
