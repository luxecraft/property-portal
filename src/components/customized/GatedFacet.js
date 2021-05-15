import React from "react";
import { RefinementList } from "react-instantsearch-dom";

function GatedFacet() {
  return (
    <RefinementList
      attribute="gated_community"
      transformItems={(items) =>
        items.map((item) => {
          let label = item.label;
          if (label === "true") {
            label = "Gated Community";
          } else {
            label = "Non-Gated Community";
          }
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

export default GatedFacet; 
