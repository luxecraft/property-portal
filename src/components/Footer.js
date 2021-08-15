import React from 'react';

function Footer() {
  return (
    <div className="container-fluid footer text-center">
      <h5 className="footer-text">
        Developed with{' '}
        <img height="30em" src="images/icons/customheart.png" alt="❤️" /> by{' '}
        <a
          className="unstyled"
          href="https://github.com/HarisaranG"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harisaran
        </a>{' '}
        and{' '}
        <a
          className="unstyled"
          href="https://github.com/programVeins"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sabesh
        </a>
      </h5>

      <div className="memoji-row">
        <img
          className="memoji"
          src="images/memojis/hari_memoji.png"
          alt="Sabesh's Memoji"
        />
        <img
          className="memoji"
          src="images/memojis/sabesh_memoji.png"
          alt="Sabesh's Memoji"
        />
      </div>
      <a href="https://vercel.com/?utm_soure=luxecraft&utm_campaign=oss">
        <img
          className="close-btn"
          src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
        />
      </a>
      <p className="footer-text-bottom">
        &copy;{new Date().getFullYear()} Property Portal
      </p>
    </div>
  );
}

export default Footer;
