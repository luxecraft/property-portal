import React from 'react';
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
import PropTypes from 'prop-types';

export default function SearchComponent() {
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
        <Configure hitsPerPage={8} />
      </div>
      <div className="right-panel">
        <SearchBox
          submit={
            <img className="icon" src="/images/icons/search.png" alt="" />
          }
          reset={<img className="icon" src="/images/icons/close.png" alt="" />}
          translations={{
            placeholder: 'Type City, State, Project, Builders...',
          }}
        />
        <CustomStats />
        <ListRefinements />
        <div className="hit-wrapper">
          <Hits className="hitList" hitComponent={Hit} />
          <Map />
        </div>
        <div
          className="pagination-wrapper"
          onClick={() => {
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
