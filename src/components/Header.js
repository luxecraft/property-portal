import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import KendoIcons from './customized/KendoIcons';

function Header() {
  const [curentPage, setCurentPage] = useState(
    window.location.href.split('3000/')[1] ||
      window.location.href.split('live/')[1] ||
      window.location.href.split('app/')[1] ||
      window.location.href.split('codes/')[1]
  );

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setCurentPage(
      window.location.href.split('3000/')[1] ||
        window.location.href.split('live/')[1] ||
        window.location.href.split('app/')[1] ||
        window.location.href.split('codes/')[1]
    );
  }, [trigger]);

  return (
    <div className="header-main">
      <h2 className="title-text">
        <Link to="/" className="title-link">
          Property Portal
        </Link>
      </h2>
      <div className="navbarr">
        <Link
          onClick={() => setTrigger(!trigger)}
          className={
            (curentPage == 'rental' ? 'active-tab ' : '') + 'rental-button'
          }
          to="/rental"
        >
          Rental
        </Link>
        <Link
          onClick={() => setTrigger(!trigger)}
          className={
            (curentPage == 'sale' ? 'active-tab ' : '') + 'sale-button'
          }
          to="/sale"
        >
          Sale
        </Link>
      </div>

      <div className="ico-wrapper">
        <KendoIcons />
      </div>
    </div>
  );
}

export default Header;
