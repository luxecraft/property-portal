import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomMap from '../customized/CustomMap';
const imagesDirectory = 'images/';

export default function PropertyDetailsComponent(props) {
  const propertyDetailsParser = (data) => {
    let temp_data = [];
    for (let i = 0; i < data.length; ++i) {
      if (!temp_data.includes(data[i])) {
        temp_data.push(data[i]);
      }
    }
    for (let i = 0; i < temp_data.length; ++i) {
      temp_data[i] = temp_data[i][0].toUpperCase() + temp_data[i].slice(1);
    }
    return temp_data;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const monthFinder = (mo) => {
    switch (parseInt(mo)) {
      case 1:
        return 'January';
        break;
      case 2:
        return 'February';
        break;
      case 3:
        return 'March';
        break;
      case 4:
        return 'April';
        break;
      case 5:
        return 'May';
        break;
      case 6:
        return 'June';
        break;
      case 7:
        return 'July';
        break;
      case 8:
        return 'August';
        break;
      case 9:
        return 'September';
        break;
      case 10:
        return 'October';
        break;
      case 11:
        return 'November';
        break;
      case 12:
        return 'December';
        break;
      default:
        break;
    }
  };

  const [currentProperty, setcurentProperty] = useState(
    props.location.state.currentProperty
  );

  console.log(currentProperty);
  return (
    <div className="container">
      <Link
        to={currentProperty.construction_status == null ? '/rental' : '/sale'}
      >
        <span className="float-left">
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left myPath"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stopColor="#ffa760" />
                <stop offset="95%" stopColor="#ff5d83" />
              </linearGradient>
            </defs>

            <path
              fillRule="evenodd"
              d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </Link>
      <div className="prop-details-top">
        <img
          className="big-image"
          src={imagesDirectory + currentProperty.image_url.split('/images/')[1]}
          alt={currentProperty.project_name}
        />
        <div className="text-details">
          <div className="title-price">
            <h3 className="project-title">{currentProperty.project_name}</h3>
            <h3 className="project-price">₹{currentProperty.price}</h3>
          </div>
          <p className="project-citystreet">
            <img
              className="location-marker-detail"
              src="images/icons/location.png"
              alt="Location Marker"
            />
            {currentProperty.street_name}, {currentProperty.city_facet}
          </p>

          <p className="project-info">
            <b>Builder:</b> {currentProperty.builder_name}
          </p>

          <p className="project-info">
            <b>Holder:</b> {currentProperty.holders_name}
          </p>

          <p className="project-info">
            <b>Address:</b> {currentProperty.address}
          </p>

          <p className="project-info">
            <b>Postcode:</b> {currentProperty.postcode}
          </p>

          <p className="project-info">
            <b>Land Type:</b> {currentProperty.type_facet}
          </p>

          <p className="project-info">
            <b>Area and BHK:</b> {currentProperty.sqrft} ft<sup>2</sup> -{' '}
            {currentProperty.bhk_facet} BHK
          </p>

          {currentProperty.construction_status != null ? (
            <p className="project-info">
              <b>Construction Status:</b>{' '}
              {currentProperty.construction_status != true
                ? 'Completed'
                : 'On-Going'}
            </p>
          ) : null}

          {currentProperty.construction_status != null ? (
            <p className="project-info">
              <b>Date of completion:</b>{' '}
              {currentProperty.construction_status
                ? monthFinder(
                    currentProperty.date_of_completion.split(',')[0]
                  ) +
                  ' 20' +
                  currentProperty.date_of_completion.split(', ')[1]
                : '-'}
            </p>
          ) : null}

          <p className="project-info">
            <b>Contact:</b> {currentProperty.phone}
          </p>
        </div>
      </div>

      <div className="prop-details-bottom">
        <div className="left-bottom">
          <p className="project-info-bottom amenities-text">
            <b>Amenities:</b>
            {currentProperty.amenities_facet.length ? (
              <ul>
                {propertyDetailsParser(currentProperty.amenities_facet).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            ) : (
              <p>None</p>
            )}
          </p>

          <p className="project-info-bottom">
            <b>Extra Amenities:</b>
            {currentProperty.amenities_extra_facet.length ? (
              <ul>
                {propertyDetailsParser(
                  currentProperty.amenities_extra_facet
                ).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}
          </p>

          <p className="project-info-bottom">
            <b>Age of Property:</b>{' '}
            {currentProperty.new_facet ? 'Brand New' : 'More than 5 years old'}
          </p>

          <p className="project-info-bottom">
            <b>Gated Community:</b>{' '}
            {currentProperty.gated_community ? 'Yes' : 'No'}
          </p>

          {currentProperty.rate_per_sqrft != null ? (
            <p className="project-info-bottom">
              <b>
                Rate per ft<sup>2</sup>:
              </b>{' '}
              ₹{currentProperty.rate_per_sqrft}
            </p>
          ) : null}
        </div>
        <div className="right-bottom">
          <h6 className="bottom-detail-heading">Location</h6>
          <CustomMap
            lat={currentProperty.location[0]}
            lng={currentProperty.location[1]}
          />
        </div>
      </div>
    </div>
  );
}
