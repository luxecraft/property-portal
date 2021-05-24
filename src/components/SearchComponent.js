import React, { useEffect, useState } from 'react';
import {
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  Configure,
} from 'react-instantsearch-dom';
import Map from './customized/Map';
import Hit from './customized/Hit';
import CustomStats from './customized/CustomStats';
import FacetListAmenities from './customized/FacetListAmenities';
import FacetListAmenitiesExtra from './customized/FacetListAmenitiesExtra';
import ListRefinements from './customized/ListRefinements';
import PriceFacet from './customized/PriceFacet';
import NewFacet from './customized/NewFacet';
import BhkFacet from './customized/BhkFacet';
import GatedFacet from './customized/GatedFacet';
import TypeFacet from './customized/TypeFacet';
import SqrftFacet from './customized/SqrftFacet';
import SortByRental from './customized/SortByRental';
import PropTypes from 'prop-types';
import ToastComponent from './customized/ToastComponent';
import SortBySale from './customized/SortyBySale';
import OngoingFacet from './customized/OngoingFacet';

export default function SearchComponent({ name }) {

  const [currentOS, setCurrentOS] = useState('Windows')

  const [isSearchActive, setIsSearchActive] = useState(true)

  const getOS = () => {
    if (navigator.appVersion.indexOf("Mac") != -1) {
      setCurrentOS('macOS')
    }
  }

  let keysPressed = {};

  useEffect(() => {

    getOS()

    document.addEventListener('click', (event) => {
      if (document.activeElement != document.getElementsByClassName('ais-SearchBox-input')[0]) {
        setIsSearchActive(true)
      }
      else {
        setIsSearchActive(false)
      }
    });

    document.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;

      if ((keysPressed['Meta'] || keysPressed['Control']) && event.key == 'k') {
        event.preventDefault()
        document.getElementsByClassName('ais-SearchBox-input')[0].focus()
        setIsSearchActive(false)
        return false;
      }
    });

    document.addEventListener('keyup', (event) => {
      delete keysPressed[event.key];
    });

  }, [])

  return (
    <div className="main-area">
      <div className="left-panel">
        <ClearRefinements />
        <h4 className="sidebar-heading">Price</h4>
        <PriceFacet />
        <h4 className="sidebar-heading">Square Feet</h4>
        <SqrftFacet />
        <h4 className="sidebar-heading">BHK</h4>
        <BhkFacet />
        {name === 'sale' ? (
          <div>
            <h4 className="sidebar-heading">Status</h4>
            <OngoingFacet />
          </div>
        ) : null}
        <h4 className="sidebar-heading">New/Old</h4>
        <NewFacet />
        <h4 className="sidebar-heading">Gated Community</h4>
        <GatedFacet />
        <h4 className="sidebar-heading">Type</h4>
        <TypeFacet />
        <h4 className="sidebar-heading">Basic Amenities</h4>
        <FacetListAmenities />
        <h4 className="sidebar-heading">Extra Amenities</h4>
        <FacetListAmenitiesExtra />
        <Configure hitsPerPage={6} />
      </div>

      <div className="right-panel">
        <div className="search-sort">
          <SearchBox
            submit={
              <img className="icon" src="/images/icons/search.png" alt="" />
            }
            reset={<img className="icon" src="/images/icons/close.png" alt="" />}
            translations={{
              placeholder: 'Type City, Street name, State, Project, Builder',
            }}
          />
          {
            (isSearchActive) ?
              <div className="search-hotkeys">

                <>
                  <img src={(currentOS == "Windows") ? "images/icons/ctrl.png" : "images/icons/cmd.png"} alt="hotkey" />
                  <img src="images/icons/k.png" alt="hotkey" />
                </>

              </div> : null
          }
          {name === 'rent' ? <SortByRental /> : <SortBySale />}
        </div>
        <CustomStats />
        <ListRefinements />
        <div className="hit-wrapper">
          <Hits className="hitList" hitComponent={Hit} />
          <div className="mapSide">
            <ToastComponent />
            <Map />
          </div>
        </div>
        <div
          className="pagination-wrapper"
          onClick={() => {
            console.log('object');
            window.scrollTo(0, 0);
          }}
        >
          <Pagination className="ais-Pagination" />
        </div>
      </div>
    </div>
  );
}

SearchComponent.propTypes = {
  name: PropTypes.string,
};
