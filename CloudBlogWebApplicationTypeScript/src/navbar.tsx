import React, { useEffect, useState, FunctionComponent } from "react";
import logo from "./assets/logo/logo.png";

const Navbar: FunctionComponent = (props) => {
  const { data } = props;
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          <img height="40px" src={logo}></img>
        </a>
        <a className="navbar-brand logo" href="#">
          CloudBlog
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/index">
                Home
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/blog-post-list">
                Blog
              </a>
            </li>
            {/*
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/blog-post">
                Blog Post
              </a>
            </li>
            */}
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/contact-us">
                Contact Us
              </a>
            </li>
            {data ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Edit
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {data ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="http://localhost:4000/logout">
                  Logout - {data}
                </a>
              </li>
            ) : (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
