import React, { useState } from 'react';
import {
  GoogleMapsLoader,
  GeoSearch,
  Marker,
} from 'react-instantsearch-dom-maps';
import ToggleTip from '../ToggleTip';

function Map() {
  const toggleToolTip = () => {
    settoggleTipHit(null);
  };

  const [toggleTipHit, settoggleTipHit] = useState(null);
  const renderToggleTip = (hit) => {
    settoggleTipHit(hit);
  };
  return (
    <div className="hitsMap">
      <GoogleMapsLoader apiKey="AIzaSyAf85FUBtCy2eyCF4BoBBDoh4j9m_lxhC8">
        {(google) => (
          <GeoSearch google={google}>
            {({ hits }) => (
              <div>
                {hits.map((hit) => (
                  <>
                    <Marker
                      key={hit.id}
                      onClick={() => renderToggleTip(hit)}
                      hit={hit}
                    />
                  </>
                ))}
                {toggleTipHit ? (
                  <ToggleTip toggler={toggleToolTip} hit={toggleTipHit} />
                ) : null}
              </div>
            )}
          </GeoSearch>
        )}
        {}
      </GoogleMapsLoader>
    </div>
  );
}

export default Map;
