import { CurrentRefinements } from 'react-instantsearch-dom';
import React from 'react';
import priceFormatter from '../PriceFormatter';

function ListRefinements() {
  return (
    <CurrentRefinements
      transformItems={items =>
        items.map(item => {
          if (item.id === 'boundingBox') {
            item.label = 'Map Boundary';
          } else if (item.attribute === 'price') {
            let min = priceFormatter(item.currentRefinement.min);
            let max = priceFormatter(item.currentRefinement.max);
            item.label = `${min} < ₹ < ${max}`;
          } else if (item.attribute === 'sqrft') {
            item.label = item.label.replace('sqrft:', '');
          } else if (item.attribute === 'new_facet') {
            item.label = '';
            item.items = item.items.map(item1 => {
              if (item1.label === 'true') {
                item1.label = 'New';
              } else if (item1.label === 'false') {
                item1.label = 'Old';
              }
              return item1;
            });
          } else if (item.attribute === 'gated_community') {
            item.label = 'Gated Community: ';
            item.items = item.items.map(item1 => {
              if (item1.label === 'true') {
                item1.label = 'Yes';
              } else if (item1.label === 'false') {
                item1.label = 'No';
              }
              return item1;
            });
          } else if (item.attribute === 'bhk_facet') {
            item.label = 'BHK: ';
          } else if (item.attribute === 'amenities_facet') {
            item.label = 'Amenities: ';
            item.items = item.items.map(item1 => {
              let label = item1.label;
              label = label[0].toUpperCase() + label.slice(1, label.length);
              let temp = {
                ...item1,
                label: label,
              };
              return temp;
            });
          } else if (item.attribute === 'amenities_extra_facet') {
            item.label = 'Extra Amenities: ';
            item.items = item.items.map(item1 => {
              let label = item1.label;
              label = label[0].toUpperCase() + label.slice(1, label.length);
              if (label === 'Swimming') {
                label = 'Swimming Pool';
              }
              let temp = {
                ...item1,
                label: label,
              };
              return temp;
            });
          } else if (item.attribute === 'type_facet') {
            item.label = 'Type: ';
          } else if (item.attribute === 'construction_status') {
            item.label = 'Construction Status: ';
            item.items = item.items.map(item1 => {
              if (item1.label === 'true') {
                item1.label = 'On-Going';
              } else if (item1.label === 'false') {
                item1.label = 'Completed';
              }
              return item1;
            });
          }
          return item;
        })
      }
    />
  );
}
export default ListRefinements;
