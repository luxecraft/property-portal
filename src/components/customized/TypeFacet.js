import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

function TypeFacet() {
  return <RefinementList attribute="type_facet" />;
}

export default TypeFacet;
