import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import SearchComponent from "../SearchComponent";
import searchClient from "../TypesenseConfig";

function RentalComponent() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="rent" searchClient={searchClient}>
        <SearchComponent name="rent" />
      </InstantSearch>
    </div>
  );
}

export default RentalComponent;
