import { CurrentRefinements } from "react-instantsearch-dom";
import React from "react";
import priceFormatter from "../PriceFormatter";

function ListRefinements() {
  return (
    <CurrentRefinements
      transformItems={(items) => {
        let tempItems = items.map((item) => {
          if (item.id === "boundingBox") {
            item.label = "Map Boundary";
            return item;
          }
          if (item.attribute === "price") {
            let min = priceFormatter(item.currentRefinement.min);
            let max = priceFormatter(item.currentRefinement.max);
            item.label = `${min} < ₹ < ${max}`;
            return item;
          }
          if (item.attribute === "sqrft") {
            item.label = item.label.replace("sqrft: ", "");
            return item;
          }
          if (item.attribute === "new_facet") {
            item.label = "";

            item.items = item.items.map((item1) => {
              if (item1.label === "true") {
                item1.label = "New";
              } else if (item1.label === "false") {
                item1.label = "Old";
              }
              return item1;
            });
            return item;
          }
          if (item.attribute === "gated_community") {
            item.label = "";
            item.items = item.items.map((item1) => {
              if (item1.label === "true") {
                item1.label = "Gated Community";
              } else if (item1.label === "false") {
                item1.label = "Non-Gated Community";
              }
              return item1;
            });
            return item;
          }
          item.label = "";
          if (
            ["amenities_facet", "amenities_extra_facet"].includes(
              item.attribute
            )
          ) {
            item.items = item.items.map((item1) => {
              let label = item1.label;
              label = label[0].toUpperCase() + label.slice(1, label.length);
              if (label === "Swimming") {
                label = "Swimming Pool";
              }
              let temp = {
                ...item1,
                label: label,
              };
              return temp;
            });
          }
          return item;
        });
        return tempItems;
      }}
    />
  );
}
export default ListRefinements;
