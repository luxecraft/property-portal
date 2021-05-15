import React from 'react';
import { CustomMarker } from 'react-instantsearch-dom-maps';
import PropType from 'prop-types';

function ToggleTip({ hit }) {
  return (
    <CustomMarker key={hit.id} hit={hit}>
      <div>
        <h3>{hit.name}</h3>
        <h5>
          {hit.city_facet},{hit.state_facet} {hit.post_code}
        </h5>
        <h5>{hit.phone_number}</h5>
      </div>
    </CustomMarker>
  );
}

ToggleTip.propTypes = {
  hit: PropType.object.isRequired,
};

export default ToggleTip;
