import React, { useEffect, useState, FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="page-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h5>Get started</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>About us</h5>
            <ul>
              <li>
                <a href="#">Company Information</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help desk</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2020 Arnav Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
