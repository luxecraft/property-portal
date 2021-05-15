import React from "react";
import { Highlight } from "react-instantsearch-dom";
import PropTypes from "prop-types";
import priceFormatter from "../PriceFormatter";

const imagesDirectory = "images/";
function Hit(props) {
  return (
    <div>
      <div className="overlay-container">
        <img
          className="hit-image"
          src={imagesDirectory + props.hit.image_url.split("/images/")[1]}
          alt={props.hit.project_name}
        />

        {
          (props.hit.construction_status != null) ?
            <div class="overlay">{props.hit.construction_status ? 'On-Going' : "Completed"}</div>
            : null
        }

      </div>

      <div className="hit-name">
        <Highlight attribute="project_name" hit={props.hit}>
          {props.hit.project_name}
        </Highlight>
      </div>

      <div className="hit-price-city">
        <div className="location-bar">
          <img
            className="location-marker"
            src="images/icons/location.png"
            alt="Location Marker"
          />
          <p className="hit-city">
            <Highlight attribute="street_name" hit={props.hit}>
              {props.hit.street_name}
            </Highlight>
            <br />
            <Highlight attribute="city_facet" hit={props.hit}>
              {props.hit.city_facet}
            </Highlight>
          </p>
        </div>
        <div>
          <button type="button" class="btn btn-success"><a className="unstyled" href={'tel:' + props.hit.phone}>Contact</a></button>
          <p className="hit-price">₹{priceFormatter(props.hit.price)}</p>
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit; 
