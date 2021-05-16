import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [curentPage, setCurentPage] = useState(
    window.location.href.split('3000/')[1] ||
    window.location.href.split('live/')[1] ||
    window.location.href.split('app/')[1]
  );

  console.log(window.location.href.split('3001/')[1]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-main">
      <h2 className="title-text" ><Link to="/" className="title-link">Property Portal</Link></h2>
      <div className="navbarr">
        <a
          className={
            (curentPage == 'rental' ? 'active-tab ' : '') + 'rental-button'
          }
          href="/rental"
        >
          Rental
        </a>
        <a
          className={
            (curentPage == 'sale' ? 'active-tab ' : '') + 'sale-button'
          }
          href="/sale"
        >
          Sale
        </a>

        <a
          className="github-icon"
          href="https://github.com/HarisaranG/property-portal-hackathon"
          target="_blank"
          rel="noopener"
        >
          <img height="40em" src="images/icons/github.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
