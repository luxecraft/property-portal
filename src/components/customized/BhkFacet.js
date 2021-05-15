import React from "react";
import { RefinementList } from "react-instantsearch-dom";

function BhkFacet() {
  return (
    <RefinementList
      attribute="bhk_facet"
      transformItems={(items) =>
        items.map((item) => {
          let label = item.label;
          label = label + " BHK";
          let temp = {
            ...item,
            label: label,
          };
          return temp;
        })
      }
      limit={4}
    />
  );
}

export default BhkFacet;
