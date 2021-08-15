import React, { useState } from 'react';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import priceFormatter from '../PriceFormatter';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const imagesDirectory = 'images/';
function Hit(props) {
  const [redirect, setRedirect] = useState(false);
  const [hitProp, setHitProp] = useState({});

  const sendProps = (hit) => {
    setHitProp(hit);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: '/property-details',
          state: { currentProperty: hitProp },
        }}
      />
    );
  }

  return (
    <div>
      <div className="overlay-container" onClick={() => sendProps(props.hit)}>
        <img
          className="hit-image"
          src={imagesDirectory + props.hit.image_url.split('/images/')[1]}
          alt={props.hit.project_name}
        />

        {props.hit.construction_status != null ? (
          <div className="overlay">
            {props.hit.construction_status != true ? 'Completed' : 'On-Going'}
          </div>
        ) : null}
      </div>

      <div className="hit-name" onClick={() => sendProps(props.hit)}>
        <Highlight attribute="project_name" hit={props.hit}>
          {props.hit.project_name}
        </Highlight>
      </div>

      <div className="hit-price-city">
        <div className="location-bar" onClick={() => sendProps(props.hit)}>
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
            <p className="sqrft-bhk">
              {props.hit.sqrft} ft<sup>2</sup> - {props.hit.bhk_facet} BHK
            </p>
          </p>
        </div>

        <div>
          <Link className="unstyled btn btn-success" to="/contact">
            Contact
          </Link>
          <p className="hit-price" onClick={() => sendProps(props.hit)}>
            ₹{priceFormatter(props.hit.price)}
          </p>
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
