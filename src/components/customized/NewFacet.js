import { RefinementList } from "react-instantsearch-dom";
import React from "react";

function NewFacet() {
  return (
    <RefinementList
      attribute="new_facet"
      transformItems={(items) =>
        items.map((item) => {
          let label = item.label;
          if (label === "true") {
            label = "New";
          } else {
            label = "Old";
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

export default NewFacet;
