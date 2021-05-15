import React from "react";
import { NumericMenu } from "react-instantsearch-dom";
import CustomRangeSlider from "./CustomRangeSlider";

function SqrftFacet() {
  return (
    <div className="sqrft-fact">
      <CustomRangeSlider attribute="sqrft" />
    </div>
  );
}

export default SqrftFacet;
