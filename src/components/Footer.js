import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer text-center">
      <h5 className="footer-text">Developed with ❤️ by <a className="unstyled" href="https://github.com/HarisaranG" target="_blank" rel="noopener">Harisaran</a> and <a className="unstyled" href="https://github.com/programVeins" target="_blank" rel="noopener">Sabesh</a></h5>


      <p className="footer-text-bottom">&copy;{new Date().getFullYear()} Property Portal</p>
    </div>);
}

export default Footer;
