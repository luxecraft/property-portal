import React, { useEffect, useState } from 'react';
import { CustomMarker } from 'react-instantsearch-dom-maps';
import PropType from 'prop-types';

const imagesDirectory = "images/";

function ToggleTip({ hit, toggler }) {

  const [enable, setEnable] = useState(true)

  console.log(hit)

  if (!enable)
    return null

  return (
    <CustomMarker key={hit.id} hit={hit}>
      <div className="map-tool-tip">
        <div className="overlay-container-tip">
          <img
            className="hit-image"
            src={imagesDirectory + hit.image_url.split("/images/")[1]}
            alt={hit.project_name}
          />
          <div class="overlay-tip">
            <img className="close-btn" onClick={() => toggler()} height="15em" src="images/icons/back.png" alt="Close tool tip" />
          </div>
        </div>
        <h5 className="tool-tip-prop-name">
          {hit.project_name}
        </h5>

        <h5 className="tool-tip-loc">
          {hit.sqrft} ft<sup>2</sup> - {hit.bhk_facet} BHK
        </h5>

        <h5 className="tool-tip-price">
          ₹{hit.price}
        </h5>

      </div>
    </CustomMarker>
  );
}

ToggleTip.propTypes = {
  hit: PropType.object.isRequired,
};

export default ToggleTip;
